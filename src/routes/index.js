import Login from '~/pages/Login';
import Dashboard from '~/pages/dashboard/Dashboard';
import ManagerUser from '~/pages/user/ManagerUser';

// khong dang nhap van vao duoc
const publicRoutes = [{ path: '/', component: Login, layout: Login }];

// phai dang nhap moi vao duoc
const privateRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/user', component: ManagerUser },
];

export { publicRoutes, privateRoutes };
