//Layouts
import HeaderOnly from '~/components/Layouts/HeaderOnly';

//Pages
import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

const publicRoute = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/following',
        component: FollowingPage,
    },
    {
        path: '/profile',
        component: ProfilePage,
    },
    {
        path: '/upload',
        component: UploadPage,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: SearchPage,
        layout: null,
    },
];

const privateRoute = [];

export { publicRoute, privateRoute };
