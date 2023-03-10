import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);

const HeaderNav = ({ classDrops = false, classCalendar = false, classLearnMore = false }) => {
    return (
        <div className={cx('header')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <Link to={config.routes.drop} className={cx('item-link', classDrops && 'item-link-first')}>
                        Drops
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.drop_calendar}
                        className={cx('item-link', classCalendar && 'item-link-first')}
                    >
                        Calendar
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.drop_learnMore}
                        className={cx('item-link', classLearnMore && 'item-link-first')}
                    >
                        Learn More
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderNav;
