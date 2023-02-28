import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import decode from 'jwt-decode';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Product.module.scss';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Footer from '~/layouts/Components/Footer/Footer';
import Collection from '~/components/Collection/Collection';
import ProductItems from './ProductItems/ProductItems';
import { CollectorItem } from '~/layouts/Components/Main/compoents';
import Header from '~/components/Header/Header';

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
            <Header title="CART" avatar />

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
