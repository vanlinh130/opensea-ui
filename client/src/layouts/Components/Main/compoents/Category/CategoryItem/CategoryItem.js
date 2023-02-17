import React from 'react';
import classNames from 'classnames/bind';

import styles from './CategoryItem.module.scss';

const cx = classNames.bind(styles);

const CategoryItem = ({ post }) => {
    return (
        <div className={cx('category-item')}>
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
