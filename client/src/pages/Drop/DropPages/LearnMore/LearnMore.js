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
            <section className={cx('container', 'wrapper')}>
                <div className={cx('hero-wrapper')}>
                    <div className={cx('hero-content')}>
                        <div className={cx('hero-content-logo')}>
                            <img
                                className={cx('logo-one')}
                                src="https://assets-global.website-files.com/639756150a63ed9f6f910b94/63a22e35f087ff1d14c249a6_Ship.svg"
                                alt="images-logo"
                            />
                            <img
                                className={cx('logo-tow')}
                                src="https://assets-global.website-files.com/639756150a63ed9f6f910b94/63a260a2fa137f64c33763e9_Waves%20compressed.gif"
                                alt="images-logo"
                            />
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

            <div className={cx('sub-wrapper', 'wrapper')}>
                <div className={cx('sub-hero-wrapper')}>
                    <h2>The world’s top NFT creators and brands rely on OpenSea to reach new audiences</h2>
                </div>
            </div>

            <div className={cx('partners-wrapper', 'wrapper')}>
                <div className={cx('partners-list')}>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_1} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_2} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_3} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_4} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_5} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_6} alt="partner-images" />
                    </div>
                    <div className={cx('partners-item')}>
                        <img src={images.drop_partners_7} alt="partner-images" />
                    </div>
                </div>
            </div>

            <div className={cx('why-drop-wrapper', 'wrapper')}>
                <div className={cx('why-drop-column-wrapper')}>
                    <div className={cx('why-drop_left-col')}>
                        <img src={images.drop_why_1} alt="drop-images" />
                        <img src={images.drop_why_2} alt="drop-images" />
                        <img src={images.drop_why_3} alt="drop-images" />
                        <img src={images.drop_why_4} alt="drop-images" />
                    </div>
                    <div className={cx('why-right-col')}></div>
                </div>
            </div>
        </>
    );
};

export default LearnMore;
