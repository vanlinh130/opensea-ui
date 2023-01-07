import React from 'react';
import classNames from 'classnames/bind';

import styles from './NFTItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const NFTItem = () => {
    return (
        <div className={cx('nft-item')}>
            <div className={cx('item-image')}>
                <img src={images.nft_1} alt="images" />
            </div>
            <div className={cx('item-content')}>
                <div>What is an NFT ?</div>
            </div>
        </div>
    );
};

export default NFTItem;
