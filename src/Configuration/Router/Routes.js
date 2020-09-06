import React from 'react';

const Dashboard = React.lazy(() => import('../../Pages/Users/Users'));

const routes = [{ path: '/users', name: 'Users', component: Dashboard, exact: true, isPrivate: true }];

export default routes;
