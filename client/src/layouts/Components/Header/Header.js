import { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faCartShopping, faCircleUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import { LogoIcon } from '~/components/Icons/Icons';
import Menu from '~/components/Popper/Menu';
import { Avatar } from '@mui/material';
import {
    MENU_ITEMS_EXPLORE,
    MENU_ITEMS_DROPS,
    MENU_ITEMS_STARTS,
    MENU_ITEMS_RESOURCE,
    MENU_ITEMS_PROFILE,
    MENU_ITEMS_PROFILE_LOGOUT,
} from './MenuItems';
import MenuLanguage from '~/components/Popper/Menu/MenuLanguges';
import MenuResource from './../../../components/Popper/Menu/MenuResoures';
import Button from '~/components/Button';
import { SearchPost } from '~/components/Search';

const cx = classNames.bind(styles);

function Header() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        navigate('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        // JWT
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img className={cx('logo-opensea')} src={images.logo} alt="opensea" />
                    <LogoIcon className={cx('brand-name')} />
                </Link>

                {/* search */}

                <SearchPost
                    placeholder="Search items, collections, and accounts"
                    navigates="/search"
                    navigateHome="/"
                />

                {/* Actions */}
                <ul className={cx('fresnel-container')}>
                    <div className={cx('fresnel-list')}>
                        <li>
                            <Menu items={MENU_ITEMS_EXPLORE}>
                                <Link to={config.routes.explore} className={cx('fresnel-item')}>
                                    Explore
                                </Link>
                            </Menu>
                        </li>
                        <li>
                            <Menu items={MENU_ITEMS_DROPS}>
                                <Link to={config.routes.drop} className={cx('fresnel-item')}>
                                    Drops
                                </Link>
                            </Menu>
                        </li>
                        <li>
                            <Menu items={MENU_ITEMS_STARTS}>
                                <Link to={config.routes.start} className={cx('fresnel-item')}>
                                    Starts
                                </Link>
                            </Menu>
                        </li>
                        <li>
                            <MenuResource items={MENU_ITEMS_RESOURCE}>
                                <Link to={config.routes.resource} className={cx('fresnel-item')}>
                                    Resources
                                </Link>
                            </MenuResource>
                        </li>
                    </div>
                    <div className={cx('fresnel-list')}>
                        <li>
                            {user ? (
                                <>
                                    <MenuLanguage items={MENU_ITEMS_PROFILE_LOGOUT}>
                                        <Link to={config.routes.profile} className={cx('fresnel-item', 'item-icon')}>
                                            <Avatar
                                                src={user.result.imageUrl}
                                                alt={user.result.name}
                                                className={cx('img-avatar')}
                                            >
                                                {user.result.name.charAt(0)}
                                            </Avatar>
                                        </Link>
                                    </MenuLanguage>
                                    <div>
                                        <Link to={config.routes.profile} className={cx('fresnel-item', 'item-icon')}>
                                            <h6>{user.result.name}</h6>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link onClick={logout} className={cx('fresnel-item', 'item-icon')}>
                                            <Button
                                                outline
                                                rounded
                                                className={cx('btn-log')}
                                                rightIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                                            >
                                                Log out
                                            </Button>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <MenuLanguage items={MENU_ITEMS_PROFILE}>
                                        <Link to={config.routes.auth} className={cx('fresnel-item', 'item-icon')}>
                                            <FontAwesomeIcon icon={faCircleUser} />
                                        </Link>
                                    </MenuLanguage>
                                    <div>
                                        <Link to={config.routes.auth} className={cx('fresnel-item', 'item-icon')}>
                                            <Button
                                                primary
                                                rounded
                                                className={cx('btn-log')}
                                                rightIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                                            >
                                                Sign in
                                            </Button>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </li>

                        <li>
                            <Link to={config.routes.product} className={cx('fresnel-item', 'item-icon')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </header>
    );
}

export default Header;
