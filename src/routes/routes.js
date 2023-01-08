import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// pages
import Home from '~/pages/Home/Home';
import Detail from '~/layouts/Components/Detail';
import Explore from '~/pages/Explore/Explore';
import Drop from '~/pages/Drop/Drop';
import Start from '~/pages/Start/Start';
import Resource from '~/pages/Resource/Resource';

// pages admin
import Login from '~/layouts/Components/admin/Login';
import Register from '~/layouts/Components/admin/Register';

// Public routes : ko can dang nhap vao dc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.detail, component: Detail, layout: HeaderOnly },
    { path: config.routes.explore, component: Explore, layout: HeaderOnly },
    { path: config.routes.drop, component: Drop, layout: HeaderOnly },
    { path: config.routes.start, component: Start, layout: HeaderOnly },
    { path: config.routes.resource, component: Resource, layout: null },

    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
];

// Private routes : dang nhap vao dc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
