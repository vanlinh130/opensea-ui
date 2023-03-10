import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';

import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);

const HeaderNav = ({
    classesAllNFTs = false,
    classesArtSc = false,
    classesGaming = false,
    classesMemberShips = false,
    classesPhotography = false,
}) => {
    return (
        <div className={cx('header')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_allNFTs}
                        className={cx('item-link', classesAllNFTs && 'item-link-first')}
                    >
                        All NFTs
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_artSc}
                        className={cx('item-link', classesArtSc && 'item-link-first')}
                    >
                        Art sc
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_gaming}
                        className={cx('item-link', classesGaming && 'item-link-first')}
                    >
                        Gaming
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_memberships}
                        className={cx('item-link', classesMemberShips && 'item-link-first')}
                    >
                        Memberships
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_photography}
                        className={cx('item-link', classesPhotography && 'item-link-first')}
                    >
                        Photography
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to="" className={cx('item-link')}>
                        Music
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to="" className={cx('item-link')}>
                        Sports
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderNav;
