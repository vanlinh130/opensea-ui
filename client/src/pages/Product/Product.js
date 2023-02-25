import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import decode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Product.module.scss';
import { LogoIcon } from '~/components/Icons';
import config from '~/config';
import images from '~/assets/images';
import Search from '~/layouts/Components/Header/Search/Search';
import Button from '~/components/Button/Button';
import Footer from '~/layouts/Components/Footer/Footer';
import Collection from '~/components/Collection/Collection';
import ProductItems from './ProductItems/ProductItems';
import { CollectorItem } from '~/layouts/Components/Main/compoents';

const cx = classNames.bind(styles);

const Product = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const posts = useSelector((state) => state.posts);
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
        <div className={cx('product')}>
            <div className={cx('product-header')}>
                <div className={cx('nav')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img className={cx('logo-opensea')} src={images.logo} alt="opensea" />
                        <LogoIcon className={cx('brand-name')} />
                        <h3>Cart</h3>
                    </Link>
                    <div className={cx('nav-avatar')}>
                        <Search placeholder="Find products..." />
                        {user ? (
                            <Link to={config.routes.profile} className={cx('img-avatar-no')}>
                                <Avatar src={user.result.imageUrl} alt={user.result.name} className={cx('img-avatar')}>
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
                    </div>
                </div>
            </div>

            <div className={cx('product-content')}>
                {user ? (
                    <div className={cx('product-buy')}>
                        <div className={cx('product-menu')}>
                            <div className={cx('menu-info')}>
                                <Collection title={'COLLECTION'} />
                            </div>
                            <div className={cx('menu-list')}>
                                <Collection
                                    title={'NAMES'}
                                    icons={<FontAwesomeIcon icon={faChevronDown} />}
                                    classes={cx('menu-item')}
                                />
                                <Collection
                                    title={'TITLES'}
                                    icons={<FontAwesomeIcon icon={faChevronDown} />}
                                    classes={cx('menu-item')}
                                />
                                <Collection
                                    title={'VOLUME'}
                                    icons={<FontAwesomeIcon icon={faChevronDown} />}
                                    classes={cx('menu-item')}
                                />
                                <Collection
                                    title={'TIMES'}
                                    icons={<FontAwesomeIcon icon={faChevronDown} />}
                                    classes={cx('menu-item')}
                                />
                                <Collection title={'Actions'} classes={cx('menu-item')} />
                            </div>
                        </div>

                        <>
                            {!posts.length ? (
                                <div />
                            ) : (
                                <>
                                    {posts.map((post) => (
                                        <div key={post._id}>
                                            <Link to="">
                                                <ProductItems post={post} />
                                            </Link>
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    </div>
                ) : (
                    <div className={cx('product-no-buy')}>
                        <img src={images.product_cart_no} alt="images-no-buy" />
                        <p>Giỏ hàng của bạn còn trống</p>
                        <Link to={config.routes.auth}>
                            <Button outGreen rounded>
                                MUA NGAY
                            </Button>
                        </Link>
                    </div>
                )}
            </div>

            <div className={cx('product-other')}>
                <h2>Various favorite products</h2>
                <div className={cx('product-other-item')}>
                    {!posts.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id} className={cx('collector-item')}>
                                    <Link to="/detail">
                                        <CollectorItem post={post} />
                                    </Link>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Product;