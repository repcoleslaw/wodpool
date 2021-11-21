const Q3 = require('q3-api');
const moment = require('moment');
const { forEach } = require('lodash');

const getCurrentWeek = (xs) =>
  Math.floor(moment.duration(moment().diff(xs)).asWeeks()) +
  1;

class LeaderBoard {
  constructor(competitors = []) {
    this.__$competitors = competitors;
    this.__$ledger = [];
  }

  set week(weekNumber) {
    this.__$ledger = this.__$competitors.reduce(
      (acc, curr) => {
        forEach(curr.weeks, (week) => {
          if (
            week.week === weekNumber &&
            (!week.points || !week.duration)
          ) {
            acc.push({
              handle: curr.handle,
              duration: week.duration,
              id: week._id,
            });
          }
        });

        return acc;
      },
      [],
    );
  }

  award() {
    const withinPercentOf = (num) =>
      (num + 1) / this.__$ledger.length > 30;

    this.__$ledger
      .sort((a, b) => a.duration - b.duration)
      .forEach((item, i) => {
        if (i === 0) {
          item.points = 50;
        } else if (i === 1) {
          item.points = 25;
        } else if (i === 2) {
          item.points = 15;
        } else if (withinPercentOf(30)) {
          items.points = 5;
        } else if (withinPercentOf(50)) {
          items.points = 3;
        } else {
          items.points = 1;
        }
      });
  }

  getWeekById(id) {
    return this.__$ledger.find((l) => id.equals(l.id));
  }
}

module.exports = async () => {
  const pools = await Q3.model('pools').find({
    active: true,
    startsOn: { $lte: new Date() },
  });

  await Promise.all(
    pools.map(async (pool) => {
      const lb = new LeaderBoard(pool.competitors);
      lb.week = getCurrentWeek(pool.startsOn);

      lb.award();

      pool.competitors.forEach((competitor) => {
        competitor.weeks.forEach((week) => {
          const match = lb.getWeekById(week._id);
          if (match) {
            week.points = match.points;
          }
        });
      });

      return pool.save();
    }),
  );
};
