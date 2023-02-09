import React from 'react';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import CategoryItem from './CategoryItem/CategoryItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Category = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <div className={cx('category')}>
            <h2>Browse by category</h2>
            <div className={cx('category-wrapper')}>
                {!posts.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <Link to="/detail">
                                    <CategoryItem post={post} />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Category;
