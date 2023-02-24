import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsis, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './Detail.module.scss';
import {
    IconDetailBrands,
    IconDetailDiscord,
    IconDetailWebsite,
    IconDetailMedium,
    IconDetailInstagram,
    IconDetailTwitter,
    IconDetailAdd,
} from '~/components/Icons';
import DetailItems from './DetailItems/DetailItems';
import Header from './../Header/Header';
import CheckName from '~/components/CheckName/CheckName';

const cx = classNames.bind(styles);

const Detail = () => {
    return (
        <>
            <Header />
            <div className={cx('detail-container')}>
                <div className={cx('detail-cover')}>
                    <img src={images.detail_cover} alt="images-cover" />
                </div>
                <div className={cx('detail-avatar')}>
                    <div className={cx('avatar-img')}>
                        <img src={images.detail_avatar} alt="images-avatar" />
                    </div>
                </div>

                <div className={cx('detail-name')}>
                    <div className={cx('name')}>
                        <h1>SmallBrosNFT</h1>
                        <CheckName classes={cx('icon')} />
                    </div>
                    <div className={cx('icon-lists')}>
                        <div className={cx('icon-list-info')}>
                            <div className={cx('icon-item')}>
                                <IconDetailBrands />
                            </div>
                            <div className={cx('icon-item')}>
                                <IconDetailWebsite />
                            </div>
                            <div className={cx('icon-item')}>
                                <IconDetailDiscord />
                            </div>
                            <div className={cx('icon-item')}>
                                <IconDetailMedium />
                            </div>
                            <div className={cx('icon-item')}>
                                <IconDetailInstagram />
                            </div>
                            <div className={cx('icon-item')}>
                                <IconDetailTwitter />
                            </div>
                        </div>
                        <div className={cx('between')}></div>
                        <div className={cx('icon-list-info')}>
                            <div className={cx('icon-item')}>
                                <IconDetailAdd />
                            </div>
                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon style={{ fontSize: '18px' }} icon={faShareAlt} />
                            </div>
                            <div className={cx('icon-item')}>
                                <FontAwesomeIcon style={{ fontSize: '24px' }} icon={faEllipsis} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('detail-heading')}>
                    <span>
                        By<h3> SmallBrosNFT_Official</h3>
                    </span>
                    <CheckName />
                </div>

                <div className={cx('detail-content')}>
                    <div className={cx('content-price')}>
                        <div className={cx('content-price-lists')}>
                            <div className={cx('price-item')}>
                                <span>Items</span>
                                <b>20.866</b>
                            </div>
                            <div className={cx('price-item')}>
                                <span>Created</span>
                                <b>Dec 2021</b>
                            </div>
                            <div className={cx('price-item')}>
                                <span>Creator earnings</span>
                                <b>5%</b>
                            </div>
                            <div className={cx('price-item')}>
                                <span>Chain</span>
                                <b>Ethereum</b>
                            </div>
                            <div className={cx('price-item')}>
                                <span>Category </span>
                                <b>PFPs</b>
                            </div>
                        </div>

                        <div className={cx('content-text')}>
                            <p>
                                Lil Pudgys is a collection of 22,222 NFTs originating from Pudgy Penguins. Don’t let
                                their small stature fool you, Lil Pudgys are an integral piece of the Pudgy Penguins
                                history. Their story began during the most frigid of winters. In the midst of adversity,
                                the birth of the Lil Pudgys helped spark new-life into the Pudgy Penguins community.{' '}
                            </p>
                            <div className={cx('content-text-more')}>
                                <span>See more</span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>

                        <div className={cx('content-eth-lists')}>
                            <div className={cx('content-eth-item')}>
                                <b>5.764 ETH</b>
                                <span>total volume</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>0,64 ETH</b>
                                <span>floor price</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>0,62 WETH</b>
                                <span>best offer</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>6%</b>
                                <span>listed</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>6.979</b>
                                <span>owners</span>
                            </div>
                            <div className={cx('content-eth-item')}>
                                <b>33%</b>
                                <span>unique owners</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('content-type')}>
                        <h3>Items</h3>
                        <h3>Analytics</h3>
                        <h3>Activity</h3>
                    </div>
                    <div className={cx('content-table')}>
                        <DetailItems />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
