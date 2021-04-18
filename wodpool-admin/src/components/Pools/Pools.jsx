import AbstractCollectionBuilder from 'q3-admin/lib/builders';
import PoolsAdd from '../PoolsAdd';
import Competitors from '../PoolsCompetitors';
import General from '../PoolsGeneral';
import Events from '../PoolsEvents';

export default new AbstractCollectionBuilder({
  collectionName: 'pools',
  resourceName: 'pools',
  resourceNameSingular: 'pool',
})
  .genNew(PoolsAdd)
  .genHeader({ titleProp: 'name' })
  .genViews({
    General,
    Events,
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
