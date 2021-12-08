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
    defaultColumns: [
      'maximumCompetitors',
      'featured',
      'startsOn',
      'endsOn',
    ],
    disableColumnReorder: true,
    disableMultiselect: true,
    resolvers: (rest) => ({
      ...rest,
      startsOn: {
        base: rest.startsOn,
        toDate: true,
      },
      endsOn: {
        base: rest.endsOn,
        toDate: true,
      },
      featured: {
        base: rest.featured,
        toCheck: true,
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
  })
  .build();
