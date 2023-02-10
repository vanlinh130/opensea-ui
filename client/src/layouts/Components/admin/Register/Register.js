import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Register.module.scss';
import images from '~/assets/images';
import { LogoIcon } from '~/components/Icons/Icons';
import config from '~/config';
import Footer from '../../Footer';

const cx = classNames.bind(styles);

const Register = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-login')}>
                <div className={cx('nav')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img className={cx('logo-opensea')} src={images.logo} alt="opensea" />
                        <LogoIcon className={cx('brand-name')} />
                    </Link>
                    <Link to="" className={cx('nav-help-text')}>
                        You need to help ?
                    </Link>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-login')}>
                    <div className={cx('content-link')}>
                        <img className={cx('logo-opensea')} src={images.logo} alt="opensea" />
                        <h1>Opensea</h1>
                        <h3>
                            Favorite e-commerce platform <br /> in Southeast Asia & Vietnam
                        </h3>
                    </div>
                    <div className={cx('content-form')}>
                        <h3>Register</h3>
                        <form>
                            <input name="phone" placeholder="Phone" />
                            <button>Register</button>
                            <div className={cx('info')}>
                                <div className={cx('info-or')}>
                                    <div className={cx('info-or-left')}></div>
                                    <span>Or</span>
                                    <div className={cx('info-or-right')}></div>
                                </div>
                                <div className={cx('info-other')}>
                                    <button>
                                        <img className={cx('icon-other')} src={images.faceBook} alt="facebook" />
                                        <span>Facebook</span>
                                    </button>
                                    <button>
                                        <img className={cx('icon-other')} src={images.google} alt="google" />
                                        <span>Facebook</span>
                                    </button>
                                </div>
                                <div className={cx('info-policy')}>
                                    <span>
                                        By registering, you agree to Shopee about <br />
                                        <span className={cx('description')}>Terms of Service</span> &{' '}
                                        <span className={cx('description')}>Privacy Policy</span>
                                    </span>
                                </div>
                                <div className={cx('info-text')}>
                                    <span>Welcome to Opensea?</span>
                                    <Link to="/login">Log In</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
};

export default Register;
