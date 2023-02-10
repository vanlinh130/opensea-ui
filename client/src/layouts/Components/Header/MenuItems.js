import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import { faEye, faHeart, faPen, faUser, faChartBar, faGear, faLanguage } from '@fortawesome/free-solid-svg-icons';

export const MENU_ITEMS_EXPLORE = [
    {
        icon: <img src={images.explore_1} alt="images" />,
        title: 'ALL NFTs',
    },
    {
        icon: <img src={images.explore_2} alt="images" />,
        title: 'Art sc  ',
    },
    {
        icon: <img src={images.explore_3} alt="images" />,
        title: 'Collectibles',
    },
    {
        icon: <img src={images.explore_4} alt="images" />,
        title: 'Domain Names',
    },
    {
        icon: <img src={images.explore_5} alt="images" />,
        title: 'Music',
    },
    {
        icon: <img src={images.explore_6} alt="images" />,
        title: 'Photography',
    },
    {
        icon: <img src={images.explore_7} alt="images" />,
        title: 'Sports',
    },
];

export const MENU_ITEMS_DROPS = [
    {
        title: 'Calendar',
    },
    {
        title: 'Learn more',
    },
];

export const MENU_ITEMS_STARTS = [
    {
        title: 'Rankings',
    },
    {
        title: 'Activity',
    },
];

export const MENU_ITEMS_RESOURCE = [
    {
        title: 'Learn',
    },
    {
        title: 'Help center',
    },
    {
        title: 'PLatform Status',
    },
    {
        title: 'Partners',
    },
    {
        title: 'Blog',
    },
    {
        title: 'Docs',
    },
];

export const MENU_ITEMS_PROFILE = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Login',
        to: './login',
    },
    {
        icon: <FontAwesomeIcon icon={faPen} />,
        title: 'Create',
        to: './create',
    },
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        title: 'Favorites',
    },
    {
        icon: <FontAwesomeIcon icon={faEye} />,
        title: 'WatchList',
    },
    {
        icon: <FontAwesomeIcon icon={faChartBar} />,
        title: 'My Collection',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },

    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Languages',
        language: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'en',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
];
