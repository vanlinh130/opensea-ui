import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Activity.module.scss';
import Collection from '~/components/Collection/Collection';
import { HeaderNav, HeaderTitle } from '../../Components';
import ActivityItems from './ActivityItems/ActivityItems';
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

const Activity = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <div className={cx('start')}>
            <HeaderTitle title="RangKings" />
            <HeaderNav classActivity />

            <div className={cx('activity')}>
                <div className={cx('activity-left')}>
                    <div className={cx('activity-left-event')}>
                        <div className={cx('event-type')}>
                            <h3>Event Type</h3>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </div>
                        <ul className={cx('event-list')}>
                            <li className={cx('event-item')}>
                                <input type="checkbox" value="Male" name="gender" />
                                <span>Sales</span>
                            </li>
                            <li className={cx('event-item')}>
                                <input type="checkbox" value="Male" name="gender" />
                                <span>Listings</span>
                            </li>
                            <li className={cx('event-item')}>
                                <input type="checkbox" value="Male" name="gender" />
                                <span>Offers</span>
                            </li>
                            <li className={cx('event-item')}>
                                <input type="checkbox" value="Male" name="gender" />
                                <span>Collection offers</span>
                            </li>
                            <li className={cx('event-item')}>
                                <input type="checkbox" value="Male" name="gender" />
                                <span>Transfers</span>
                            </li>
                        </ul>
                        <div className={cx('event-type')}>
                            <h3>Collection</h3>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className={cx('event-type')}>
                            <h3>Chains</h3>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                </div>

                <div className={cx('activity-right')}>
                    <div className={cx('activity-right-menu')}>
                        <div className={cx('menu-item')}>
                            <Collection title={'ITEM'} />
                        </div>
                        <div className={cx('menu-price')}>
                            <Collection title={'PRICE'} classes={cx('price-price')} />
                            <Collection title={'PARITY'} classes={cx('price-parity')} />
                            <Collection title={'QUANTITY'} classes={cx('price-quantity')} />
                        </div>
                        <div className={cx('menu-info')}>
                            <Collection title={'CONTENT'} classes={cx('info-content')} />
                            <Collection title={'TO'} classes={cx('info-to')} />
                            <Collection title={'TIME'} classes={cx('info-time')} />
                        </div>
                    </div>

                    <>
                        {!posts?.length ? (
                            <div />
                        ) : (
                            <>
                                {posts.map((post) => (
                                    <div key={post._id}>
                                        <ActivityItems post={post} />
                                    </div>
                                ))}
                            </>
                        )}
                    </>

                    <PaginationItem navigate="/starts/activity" />
                </div>
            </div>
        </div>
    );
};

export default Activity;
