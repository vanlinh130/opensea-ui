import React from 'react';
import classNames from 'classnames/bind';

import styles from './NFTItem.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const NFTItem = ({ post }) => {
    const navigate = useNavigate();

    const openPost = () => {
        navigate(`/details/${post._id}`);
    };

    return (
        <div className={cx('nft-item')} onClick={openPost}>
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
