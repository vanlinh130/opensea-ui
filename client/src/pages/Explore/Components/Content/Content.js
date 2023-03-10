import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import styles from './Content.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const Content = ({
    post,
    title,
    allNFTs = false,
    artSc = false,
    gaming = false,
    memberships = false,
    photography = false,
}) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('explore-content')}>
                <div className={cx('content-img')}>
                    <img src={post.selectedFile} alt="images-content" />
                </div>
                <h3>{title}</h3>
                <div className={cx('content-info')}>
                    <div className={cx('info-img')}>
                        <img src={post.selectedFile} alt="images-info" />
                    </div>
                    <div className={cx('info-list')}>
                        <div className={cx('info-item-left')}>
                            <h1>{post.title}</h1>
                            <span>{post.name}</span>
                            <span>{post.tags} items - 0.1195 ETH</span>
                            {allNFTs && (
                                <Button className={cx('btn-item-left')}>
                                    <div className={cx('btn-item-heart')}>
                                        <div className={cx('heart')}></div>
                                        <span>MINTING NOW</span>
                                    </div>
                                </Button>
                            )}

                            {artSc && (
                                <div className={cx('calendar-left')}>
                                    <button className={cx('btn-calendar')}>
                                        <span>1</span>
                                        <span>Day</span>
                                    </button>
                                    <button className={cx('btn-calendar')}>
                                        <span>23</span>
                                        <span>hsr</span>
                                    </button>
                                    <button className={cx('btn-calendar')}>
                                        <span>39</span>
                                        <span>Min</span>
                                    </button>
                                    <button className={cx('btn-calendar')}>
                                        <span>13</span>
                                        <span>Sec</span>
                                    </button>
                                </div>
                            )}

                            {photography && (
                                <div className={cx('calendar-left')}>
                                    <button className={cx('btn-calendar')}>
                                        <span>1</span>
                                        <span>Day</span>
                                    </button>
                                    <button className={cx('btn-calendar')}>
                                        <span>23</span>
                                        <span>hsr</span>
                                    </button>
                                    <button className={cx('btn-calendar')}>
                                        <span>39</span>
                                        <span>Min</span>
                                    </button>
                                    <button className={cx('btn-calendar')}>
                                        <span>13</span>
                                        <span>Sec</span>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className={cx('info-item-right')}>
                            {allNFTs && (
                                <Button className={cx('btn-item-right')}>
                                    <span>View drop</span>
                                </Button>
                            )}

                            {artSc && (
                                <div className={cx('calendar-right')}>
                                    <button className={cx('btn-calendar')}>
                                        <FontAwesomeIcon icon={faBell} className={cx('icon')} />
                                    </button>
                                    <button className={cx('btn-calendar')}>
                                        <span>View drop</span>
                                    </button>
                                </div>
                            )}

                            {gaming && (
                                <Button className={cx('btn-item-right')}>
                                    <span>View drop</span>
                                </Button>
                            )}

                            {memberships && (
                                <div className={cx('calendar-right')}>
                                    <button className={cx('btn-calendar')}>
                                        <FontAwesomeIcon icon={faBell} className={cx('icon')} />
                                    </button>
                                    <button className={cx('btn-calendar')}>
                                        <span>View drop</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
