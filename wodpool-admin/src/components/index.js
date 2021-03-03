import Dashboard from './Dashboard';
import Users from './Users';

export default [
  {
    home: true,
    component: Dashboard,
  },
  ...Users,
];
