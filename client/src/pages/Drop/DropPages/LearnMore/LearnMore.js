import React from 'react';
import classNames from 'classnames/bind';

import styles from './LearnMore.module.scss';
import Header from '~/components/Header/Header';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const LearnMore = () => {
    return (
        <>
            <Header title="LEARN MORE" avatar classes={cx('header')} />
            <section className={cx('container')}>
                <div className={cx('hero-wrapper')}>
                    <div className={cx('hero-content')}>
                        <div className={cx('hero-content-logo')}>
                            <img src={images.logo} alt="images-logo" />
                        </div>
                        <h1 className={cx('hero-heading')}>Make waves. Drop on OpenSea.</h1>
                        <div className={cx('hero-description')}>Partner with the most trusted name in NFTs.</div>
                        <button className={cx('hero-btn')}>Request early access</button>
                    </div>
                    <div className={cx('hero-image')}>
                        <img src={images.drop_learn_more} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default LearnMore;
