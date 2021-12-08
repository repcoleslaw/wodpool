const Q3 = require('q3-api');
const { get } = require('lodash');
const { connect, destroy } = require('../support/db');
const {
  authorize,
  genCompetitor,
  genPool,
} = require('../fixtures');

let req;

const registerForPool = async (
  id,
  // eslint-disable-next-line
  userDetails = {},
  statusCode,
) =>
  req
    .post(`/registration?pool=${id}`)
    .set({
      Authorization: await authorize(
        await genCompetitor(userDetails),
      ),
    })
    .expect(statusCode);

beforeAll(async () => {
  req = await connect();
});

afterEach(async () => {
  await Q3.model('q3-api-users').deleteMany({});
  await Q3.model('pools').deleteMany({});
});

afterAll(async () => {
  await destroy();
});

describe('Event competitor registration', () => {
  it('should fail without a pool ID', async () =>
    registerForPool('', {}, 422));

  it('should register for an event', async () => {
    const { _id: id } = await genPool();
    await registerForPool(id, {}, 200);
    expect(
      get(
        await Q3.model('pools').findById(id),
        'competitors',
      ),
    ).toHaveLength(1);
  });

  it('should fail when event is full capacity', async () => {
    const { _id: id } = await genPool({
      maximumNumberOfCompetitors: 1,
    });

    await registerForPool(
      id,
      {
        email: 'first@test.com',
        handle: 'allow',
      },
      200,
    );

    await registerForPool(
      id,
      {
        email: 'second@test.com',
        handle: 'disallow',
      },
      200,
    );
  });
});
