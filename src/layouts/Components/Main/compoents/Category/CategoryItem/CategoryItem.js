import React from 'react';
import classNames from 'classnames/bind';

import styles from './CategoryItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const CategoryItem = () => {
    return (
        <div className={cx('category-item')}>
            <div className={cx('item-image')}>
                <img src={images.category_1} alt="images" />
            </div>
            <div className={cx('item-content')}>
                <div>Category</div>
            </div>
        </div>
    );
};

export default CategoryItem;
