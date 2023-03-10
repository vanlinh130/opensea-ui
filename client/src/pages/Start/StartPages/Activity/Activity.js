import React from 'react';
import classNames from 'classnames/bind';
import styles from './Activity.module.scss';
import { HeaderNav, HeaderTitle } from '../../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Collection from '~/components/Collection/Collection';
import { IconActivity } from '~/components/Icons';
import images from '~/assets/images';
import CheckName from '~/components/CheckName/CheckName';

const cx = classNames.bind(styles);

const Activity = () => {
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
                            <Collection title={'PRICE'} classes={cx('price-one')} />
                            <Collection title={'PARITY'} classes={cx('price-tow')} />
                            <Collection title={'QUANTITY'} classes={cx('price-three')} />
                        </div>
                        <div className={cx('menu-info')}>
                            <Collection title={'FORM'} />
                            <Collection title={'TO'} />
                            <Collection title={'TIME'} />
                        </div>
                    </div>

                    <div className={cx('activity-right-content')}>
                        <div className={cx('content-item')}>
                            <div className={cx('item-offer')}>
                                <IconActivity />
                                <span>Offer</span>
                            </div>
                            <div className={cx('item-img')}>
                                <img src={images.collector_1} alt="" />
                                <span>Van Linh </span>
                                <CheckName />
                            </div>
                        </div>
                        <div className={cx('content-price')}>
                            <div className={cx('price-one')}>
                                <span>2.0000 ETH</span>
                                <p>$140.2</p>
                            </div>
                            <div className={cx('price-tow')}>
                                <span>#333</span>
                            </div>
                            <div className={cx('price-three')}>
                                <h4>1</h4>
                            </div>
                        </div>
                        <div className={cx('content-info')}>
                            <h4>Thua Thien Hue</h4>
                            <span>---</span>
                            <span>5m ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
