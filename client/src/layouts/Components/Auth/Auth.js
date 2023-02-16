import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import styles from './Auth.module.scss';
import images from '~/assets/images';
import { LogoIcon } from '~/components/Icons/Icons';
import config from '~/config';
import Footer from './../Footer/Footer';
import Input from './Input';

const cx = classNames.bind(styles);

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const clientId = '387544023335-7r4dbg893fk5otknebjthiv1n0r2mfad.apps.googleusercontent.com';

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.init({ clientId: clientId });
        });
    }, []);

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    const googleSuccess = async (res) => {
        console.log(res);
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try Again Later');
    };

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
                        <h3>{isSignup ? 'Sign Up' : 'Sign In'}</h3>
                        <form>
                            {isSignup && (
                                <>
                                    <Input name="firstName" placeholder="First Name" autoFocus />
                                    <Input name="lastName" placeholder="Last Name" />
                                </>
                            )}

                            <Input name="email" placeholder="Email Address" type="email" autoFocus />
                            <Input name="password" placeholder="Password" />

                            <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>

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

                                    <GoogleLogin
                                        clientId={clientId}
                                        render={(renderProps) => (
                                            <button
                                                className={cx('btn-submit')}
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                            >
                                                <img className={cx('icon-other')} src={images.google} alt="google" />
                                                <span>Google</span>
                                            </button>
                                        )}
                                        onSuccess={googleSuccess}
                                        onFailure={googleFailure}
                                        cookiePolicy="single_host_origin"
                                    />

                                    <button>
                                        <img className={cx('icon-other')} src={images.apple} alt="apple" />
                                        <span>Apple</span>
                                    </button>
                                </div>
                                <div onClick={switchMode} className={cx('info-text')}>
                                    {isSignup ? 'Already have an account? Sign in ' : "Don't have an account? Sign Up"}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Auth;