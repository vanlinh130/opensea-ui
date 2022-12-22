import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// pages
import Home from '~/pages/Home/Home';
import Explore from '~/pages/Explore/Explore';
import Drop from '~/pages/Explore/Explore';
import Start from '~/pages/Start/Start';
import Resource from '~/pages/Resource/Resource';

// Public routes : ko can dang nhap vao dc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore, layout: HeaderOnly },
    { path: config.routes.drop, component: Drop, layout: HeaderOnly },
    { path: config.routes.start, component: Start, layout: HeaderOnly },
    { path: config.routes.resource, component: Resource, layout: null },
];

// Private routes : dang nhap vao dc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
