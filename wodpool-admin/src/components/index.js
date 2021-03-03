import Dashboard from './Dashboard';
import Pools from './Pools';
import Users from './Users';

export default [
  {
    home: true,
    component: Dashboard,
  },
  ...Pools,
  ...Users,
];
