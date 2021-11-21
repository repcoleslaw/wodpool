const session = require('q3-core-session');

module.exports = function () {
  const q = this.getQuery();
  const { sort = {} } = this.getOptions();

  if (q.isMine)
    q['competitors.handle'] = session.get('USER', 'handle');

  if (q.isCurrent)
    q.endsOn = {
      $gte: new Date().toISOString(),
    };

  delete q.isMine;
  delete q.isCurrent;

  this.setQuery(q);
  this.sort({
    // always secondary sort
    updatedAt: 1,
    ...sort,
  });
};
