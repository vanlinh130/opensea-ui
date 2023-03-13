import React from 'react';
import classNames from 'classnames/bind';
import styles from './PlatformStatus.module.scss';
import Header from '~/components/Header/Header';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Footer from '~/layouts/Components/Footer/Footer';

const cx = classNames.bind(styles);

const PlatformStatus = () => {
    return (
        <>
            <Header title="Platform Status" avatar />
            <div className={cx('platform-img')}>
                <img src={images.resource_platformStatus} alt="" />
            </div>
            <div className={cx('container')}>
                <div className={cx('page-status')}>
                    <span>All Systems Operational</span>
                </div>

                <div className={cx('font-regular')}>
                    <div className={cx('font-regular-heading')}>
                        <span>
                            Uptime over the past 90 days{' '}
                            <Link className={cx('font-regular-link')}>View historical uptime.</Link>
                        </span>
                    </div>
                    <div className={cx('one-column-list')}>
                        <div className={cx('one-column-item')}>
                            <span className={cx('item-left')}>API</span>
                            <span className={cx('item-right')}>Operational</span>
                        </div>
                        <div className={cx('one-column-item')}>
                            <span className={cx('item-left')}>Alchemy API</span>
                            <span className={cx('item-right')}>Operational</span>
                        </div>
                        <div className={cx('one-column-item')}>
                            <span className={cx('item-left')}>Website</span>
                            <span className={cx('item-right')}>Operational</span>
                        </div>
                        <div className={cx('one-column-item')}>
                            <span className={cx('item-left')}>Mobile Application</span>
                            <span className={cx('item-right')}>Operational</span>
                        </div>
                        <div className={cx('one-column-item')}>
                            <span className={cx('item-left')}>Support Services</span>
                            <span className={cx('item-right')}>Operational</span>
                        </div>
                        <div className={cx('one-column-item')}>
                            <span className={cx('item-left')}>Emails</span>
                            <span className={cx('item-right')}>Operational</span>
                        </div>
                    </div>

                    <div className={cx('incidents')}>
                        <h3>Past Incidents</h3>
                        <div className={cx('incidents-list')}>
                            <div className={cx('incidents-item')}>
                                <h4>Mar 13, 2023</h4>
                                <p>No incidents reported today.</p>
                            </div>
                            <div className={cx('incidents-item')}>
                                <h4>Mar 12, 2023</h4>
                                <p>No incidents reported today.</p>
                            </div>
                            <div className={cx('incidents-item')}>
                                <h4>Mar 11, 2023</h4>
                                <p>No incidents reported today.</p>
                            </div>
                            <div className={cx('incidents-item')}>
                                <h4>Mar 10, 2023</h4>
                                <p>No incidents reported today.</p>
                            </div>
                            <div className={cx('incidents-item')}>
                                <h4>Mar 9, 2023</h4>
                                <p>No incidents reported today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer btnFooter={false}></Footer>
        </>
    );
};

export default PlatformStatus;
