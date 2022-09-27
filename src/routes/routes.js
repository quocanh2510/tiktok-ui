import config from '~/config/config';

//Layouts
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';

//Pages
import HomePage from '~/pages/Home/Home';
import FollowingPage from '~/pages/Following/Following';
import ProfilePage from '~/pages/Profile/Profile';
import UploadPage from '~/pages/Upload/Upload';
import SearchPage from '~/pages/Search/Search';

const publicRoute = [
    {
        path: config.routes.home,
        component: HomePage,
    },
    {
        path: config.routes.following,
        component: FollowingPage,
    },
    {
        path: config.routes.profile,
        component: ProfilePage,
    },
    {
        path: config.routes.upload,
        component: UploadPage,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: SearchPage,
        layout: null,
    },
];

const privateRoute = [];

export { publicRoute, privateRoute };
