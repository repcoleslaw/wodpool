import AbstractCollectionBuilder from 'q3-admin/lib/builders';
import PoolsAdd from '../PoolsAdd';

export default new AbstractCollectionBuilder({
  collectionName: 'pools',
  resourceName: 'pools',
  resourceNameSingular: 'pool',
})
  .genNew(PoolsAdd)
  .genHeader({ titleProp: 'name' })
  .genViews({})
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
  })
  .genListSettings({
    defaultSortPreference: 'name',
    select: 'name,description,maximumCompetitors,price',
  })
  .build();
