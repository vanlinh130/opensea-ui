import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './HeaderNav.module.scss';
const cx = classNames.bind(styles);

const HeaderNav = ({
    classAll = false,
    classAllNFTs = false,
    classArtSc = false,
    classGaming = false,
    classMemberShips = false,
    classPhotography = false,
    classMusic = false,
    classSports = false,
}) => {
    return (
        <div className={cx('header')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <Link to={config.routes.explore} className={cx('item-link', classAll && 'item-link-first')}>
                        All
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_allNFTs}
                        className={cx('item-link', classAllNFTs && 'item-link-first')}
                    >
                        All NFTs
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to={config.routes.explore_artSc} className={cx('item-link', classArtSc && 'item-link-first')}>
                        Art sc
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_gaming}
                        className={cx('item-link', classGaming && 'item-link-first')}
                    >
                        Gaming
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_memberships}
                        className={cx('item-link', classMemberShips && 'item-link-first')}
                    >
                        Memberships
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_photography}
                        className={cx('item-link', classPhotography && 'item-link-first')}
                    >
                        Photography
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to={config.routes.explore_music} className={cx('item-link', classMusic && 'item-link-first')}>
                        Music
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link
                        to={config.routes.explore_sports}
                        className={cx('item-link', classSports && 'item-link-first')}
                    >
                        Sports
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderNav;
