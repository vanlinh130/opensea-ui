import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsis, faShareAlt } from '@fortawesome/free-solid-svg-icons';

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

const cx = classNames.bind(styles);

const Detail = () => {
    return (
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
                    <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
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
                <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
            </div>

            <div className={cx('detail-content')}></div>
        </div>
    );
};

export default Detail;
