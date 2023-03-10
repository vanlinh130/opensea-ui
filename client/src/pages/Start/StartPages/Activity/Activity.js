import React from 'react';
import classNames from 'classnames/bind';
import styles from './Activity.module.scss';
import { HeaderNav, HeaderTitle } from '../../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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

                <div className={cx('activity-right')}>sd</div>
            </div>
        </div>
    );
};

export default Activity;
