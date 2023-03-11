import React from 'react';
import classNames from 'classnames/bind';
import styles from './HelpCenter.module.scss';
import Header from '~/components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const HelpCenter = () => {
    return (
        <div className={cx('')}>
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
        </div>
    );
};

export default HelpCenter;
