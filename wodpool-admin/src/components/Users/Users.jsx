import AbstractCollectionBuilder from 'q3-admin/lib/builders';
import GroupIcon from '@material-ui/icons/Group';
import UsersAdd from '../UsersAdd';
import UsersGeneral from '../UsersGeneral';

export default new AbstractCollectionBuilder({
  icon: GroupIcon,
  collectionName: 'q3-api-users',
  resourceName: 'users',
  resourceNameSingular: 'user',
})
  .genNew(UsersAdd)
  .genHeader({ titleProp: 'email' })
  .genViews({ General: UsersGeneral })
  .genList({
    defaultColumns: ['email', 'role', 'createdAt'],
    io: {},
  })
  .genDetail({
    notes: true,
    picture: true,
  })
  .genListSettings({
    defaultSortPreference: 'firstName',
    select: 'email,firstName,lastName,name,role,createdAt',
  })
  .build();
