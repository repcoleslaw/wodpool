import AbstractCollectionBuilder from 'q3-admin/lib/builders';
import PoolsAdd from '../PoolsAdd';
import Competitors from '../PoolsCompetitors';
import General from '../PoolsGeneral';
import Exercises from '../PoolsExercises';

export default new AbstractCollectionBuilder({
  collectionName: 'pools',
  resourceName: 'pools',
  resourceNameSingular: 'pool',
})
  .genNew(PoolsAdd)
  .genHeader({ titleProp: 'name' })
  .genViews({
    General,
    Exercises,
    Competitors,
  })
  .genList({
    defaultColumns: ['maximumCompetitors', 'price'],
    resolvers: (rest) => ({
      ...rest,
      price: {
        base: rest.price,
        toPrice: true,
      },
    }),
    io: {},
  })
  .genDetail({
    notes: true,
    picture: true,
    files: true,
  })
  .genListSettings({
    defaultSortPreference: 'name',
    select: 'name,description,maximumCompetitors,price',
  })
  .build();
