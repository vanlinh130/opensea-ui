import React from 'react';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import CategoryItem from './CategoryItem/CategoryItem';

const cx = classNames.bind(styles);

const Category = () => {
    return (
        <div className={cx('category')}>
            <h2>Browse by category</h2>
            <div className={cx('category-wrapper')}>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </div>
    );
};

export default Category;
