import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { LogoIcon } from '~/components/Icons';
import config from '~/config';
import images from '~/assets/images';
import Search from '~/layouts/Components/Header/Search/Search';
import Button from '~/components/Button/Button';
import Footer from '~/layouts/Components/Footer/Footer';

const cx = classNames.bind(styles);

const Product = () => {
    return (
        <div className={cx('product')}>
            <div className={cx('product-header')}>
                <div className={cx('nav')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img className={cx('logo-opensea')} src={images.logo} alt="opensea" />
                        <LogoIcon className={cx('brand-name')} />
                        <h3>Cart</h3>
                    </Link>
                    <Link to="" className={cx('nav-avatar')}>
                        <Search placeholder="Find products..." />
                        <img src={images.detail_avatar} alt="images" />
                        <h5>Văn linh</h5>
                    </Link>
                </div>
            </div>
            <div className={cx('product-content')}>
                <div className={cx('product-buy')}></div>
                <div className={cx('product-no-buy')}>
                    <img src={images.product_cart_no} alt="images-no-buy" />
                    <p>Giỏ hàng của bạn còn trống</p>
                    <Button outGreen rounded>
                        MUA NGAY
                    </Button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Product;
