import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderExplore.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const HeaderExplore = () => {
    return (
        <div className={cx('header')}>
            <ul>
                <li>
                    <Link to={config.routes.explore_allNFTs} className={cx('item-link')}>
                        All NFTs
                    </Link>
                </li>
                <li>
                    <Link to={config.routes.explore_artSc} className={cx('item-link')}>
                        Art sc
                    </Link>
                </li>
                <li>
                    <Link to={config.routes.explore_gaming} className={cx('item-link')}>
                        Gaming
                    </Link>
                </li>
                <li>
                    <Link to="" className={cx('item-link')}>
                        Memberships
                    </Link>
                </li>
                <li>
                    <Link to="" className={cx('item-link')}>
                        Photography
                    </Link>
                </li>
                <li>
                    <Link to="" className={cx('item-link')}>
                        Music
                    </Link>
                </li>
                <li>
                    <Link to="" className={cx('item-link')}>
                        Sports
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderExplore;
