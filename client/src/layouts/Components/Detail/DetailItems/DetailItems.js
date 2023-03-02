import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faList, faTable, faBorderAll, faChartBar } from '@fortawesome/free-solid-svg-icons';

import styles from './DetailItems.module.scss';
import images from '~/assets/images';
import { SearchPost } from '~/components/Search';

const cx = classNames.bind(styles);

const DetailItems = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('icon-bar')}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={cx('search')}>
                    <SearchPost placeholder="Search by name or attribute" />
                </div>
                <div className={cx('search-price')}>
                    <div className={cx('search-icon')}>
                        <h3>Price low to high</h3>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>
                <div className={cx('icon-list')}>
                    <button>
                        <FontAwesomeIcon className={cx('icon-item')} icon={faList} />
                    </button>
                    <button>
                        <FontAwesomeIcon className={cx('icon-item')} icon={faTable} />
                    </button>
                    <button>
                        <FontAwesomeIcon className={cx('icon-item')} icon={faBorderAll} />
                    </button>
                    <button>
                        <FontAwesomeIcon className={cx('icon-item')} icon={faChartBar} />
                    </button>
                </div>
            </div>

            <div className={cx('detail-list')}>
                <div className={cx('detail-item')}>
                    <div className={cx('item-image')}>
                        <img src={images.detail_item} alt="images" />
                    </div>
                    <div className={cx('item-content')}>
                        <span>Lil Pudgy #969</span>
                        <h3>0,64 ETH</h3>
                        <p>Last sale: 0,6432 ETH</p>
                    </div>
                </div>
                <div className={cx('detail-item')}>
                    <div className={cx('item-image')}>
                        <img src={images.detail_item} alt="images" />
                    </div>
                    <div className={cx('item-content')}>
                        <span>Lil Pudgy #969</span>
                        <h3>0,64 ETH</h3>
                        <p>Last sale: 0,6432 ETH</p>
                    </div>
                </div>
                <div className={cx('detail-item')}>
                    <div className={cx('item-image')}>
                        <img src={images.detail_item} alt="images" />
                    </div>
                    <div className={cx('item-content')}>
                        <span>Lil Pudgy #969</span>
                        <h3>0,64 ETH</h3>
                        <p>Last sale: 0,6432 ETH</p>
                    </div>
                </div>
                <div className={cx('detail-item')}>
                    <div className={cx('item-image')}>
                        <img src={images.detail_item} alt="images" />
                    </div>
                    <div className={cx('item-content')}>
                        <span>Lil Pudgy #969</span>
                        <h3>0,64 ETH</h3>
                        <p>Last sale: 0,6432 ETH</p>
                    </div>
                </div>
                <div className={cx('detail-item')}>
                    <div className={cx('item-image')}>
                        <img src={images.detail_item} alt="images" />
                    </div>
                    <div className={cx('item-content')}>
                        <span>Lil Pudgy #969</span>
                        <h3>0,64 ETH</h3>
                        <p>Last sale: 0,6432 ETH</p>
                    </div>
                </div>

                <div className={cx('detail-item')}>
                    <div className={cx('item-image')}>
                        <img src={images.detail_item} alt="images" />
                    </div>
                    <div className={cx('item-content')}>
                        <span>Lil Pudgy #969</span>
                        <h3>0,64 ETH</h3>
                        <p>Last sale: 0,6432 ETH</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailItems;
