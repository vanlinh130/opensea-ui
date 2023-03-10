import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);

const HeaderNav = ({ classStarts = false, classRangKings = false, classActivity = false }) => {
    return (
        <div className={cx('header')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <Link to={config.routes.start} className={cx('item-link', classStarts && 'item-link-first')}>
                        Starts
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.start_rangKings}
                        className={cx('item-link', classRangKings && 'item-link-first')}
                    >
                        RangKings
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.start_activity}
                        className={cx('item-link', classActivity && 'item-link-first')}
                    >
                        Activity
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderNav;
