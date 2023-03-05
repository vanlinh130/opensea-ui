import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Marquee from 'react-fast-marquee';

import styles from './Category.module.scss';
import CategoryItem from './CategoryItem/CategoryItem';

const cx = classNames.bind(styles);

const Category = () => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    if (!posts.length && !isLoading) return 'No posts';

    return (
        <div className={cx('category')}>
            <h2>Browse by category</h2>
            <div className={cx('category-wrapper')}>
                <Marquee>
                    {isLoading ? (
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
                </Marquee>
            </div>
        </div>
    );
};

export default Category;
