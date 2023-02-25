import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import decode from 'jwt-decode';

import styles from './Header.module.scss';
import { LogoIcon } from '~/components/Icons';
import config from '~/config';
import images from '~/assets/images';
import Search from '~/layouts/Components/Header/Search/Search';

const cx = classNames.bind(styles);

const Header = ({ title, avatar = false }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;

        // JWT
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime());
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (
        <>
            <div className={cx('product-header')}>
                <div className={cx('nav')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img className={cx('logo-opensea')} src={images.logo} alt="opensea" />
                        <LogoIcon className={cx('brand-name')} />
                        <h3>{title}</h3>
                    </Link>

                    <div className={cx('nav-avatar')}>
                        <Search placeholder="Find products..." />
                        {avatar && (
                            <>
                                {user ? (
                                    <Link to={config.routes.profile} className={cx('img-avatar-no')}>
                                        <Avatar
                                            src={user.result.imageUrl}
                                            alt={user.result.name}
                                            className={cx('img-avatar')}
                                        >
                                            {user.result.name.charAt(0)}
                                        </Avatar>
                                        <h5>{user.result.name}</h5>
                                    </Link>
                                ) : (
                                    <Link to={config.routes.auth} className={cx('img-avatar-no')}>
                                        <Avatar src={images.no_avatar} alt="images"></Avatar>
                                        <h5>Login</h5>
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
