import React from 'react';
import classNames from 'classnames/bind';

import styles from './CategoryItem.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const CategoryItem = ({ post }) => {
    const navigate = useNavigate();

    const openPost = () => {
        navigate(`/posts/${post._id}`);
    };

    return (
        <div className={cx('category-item')} onClick={openPost}>
            <div className={cx('item-image')}>
                <img src={post.selectedFile} alt="images" />
            </div>
            <div className={cx('item-content')}>
                <div>{post.name}</div>
            </div>
        </div>
    );
};

export default CategoryItem;
