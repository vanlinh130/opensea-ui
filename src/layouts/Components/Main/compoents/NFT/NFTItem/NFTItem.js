import React from 'react';
import classNames from 'classnames/bind';

import styles from './NFTItem.module.scss';

const cx = classNames.bind(styles);

const NFTItem = ({ post }) => {
    return (
        <div className={cx('nft-item')}>
            <div className={cx('item-image')}>
                <img src={post.selectedFile} alt="images" />
            </div>
            <div className={cx('item-content')}>
                <div>{post.message}</div>
            </div>
        </div>
    );
};

export default NFTItem;
