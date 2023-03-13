import React from 'react';
import classNames from 'classnames/bind';
import styles from './HelpCenter.module.scss';
import Header from '~/components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Footer from '~/layouts/Components/Footer/Footer';

const cx = classNames.bind(styles);

const HelpCenter = () => {
    return (
        <div>
            <Header title="Help Center" avatar />
            <section className={cx('main-content')}>
                <div className={cx('hero-inner')}>
                    <FontAwesomeIcon icon={faSearch} className={cx('hero-inner-icon')} />
                    <input placeholder="Search" />
                </div>
            </section>

            <section className={cx('knowledge-base')}>
                <div className={cx('blocks')}>
                    <ul className={cx('blocks-list')}>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_1} alt="" />
                                <span>Selling</span>
                            </Link>
                        </li>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_2} alt="" />
                                <span>Drops</span>
                            </Link>
                        </li>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_3} alt="" />
                                <span>Setting Started</span>
                            </Link>
                        </li>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_4} alt="" />
                                <span>Buying</span>
                            </Link>
                        </li>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_5} alt="" />
                                <span>Creating</span>
                            </Link>
                        </li>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_6} alt="" />
                                <span>Policies</span>
                            </Link>
                        </li>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_7} alt="" />
                                <span>FAQ</span>
                            </Link>
                        </li>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_8} alt="" />
                                <span>User Safety</span>
                            </Link>
                        </li>
                        <li className={cx('blocks-item')}>
                            <Link className={cx('blocks-item-link')}>
                                <img src={images.resource_helpCenter_9} alt="" />
                                <span>Developers</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={cx('Promoted')}>
                <div className={cx('Promoted-container')}>
                    <h2>Promoted articles</h2>
                    <ul className={cx('Promoted-list')}>
                        <li className={cx('Promoted-item')}>
                            <Link className={cx('Promoted-link')}>How do I sell an NFT?</Link>
                        </li>
                        <li className={cx('Promoted-item')}>
                            <Link className={cx('Promoted-link')}>How do I create an OpenSea account?</Link>
                        </li>
                        <li className={cx('Promoted-item')}>
                            <Link className={cx('Promoted-link')}>What crypto wallets can I use with OpenSea?</Link>
                        </li>
                    </ul>
                    <ul className={cx('Promoted-list-tow')}>
                        <li className={cx('Promoted-item-tow')}>
                            <Link className={cx('Promoted-link-tow')}>How do I sweep a collection?</Link>
                        </li>
                        <li className={cx('Promoted-item-tow')}>
                            <Link className={cx('Promoted-link-tow')}>How do I create an NFT?</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer btnFooter={false}></Footer>
        </div>
    );
};

export default HelpCenter;
