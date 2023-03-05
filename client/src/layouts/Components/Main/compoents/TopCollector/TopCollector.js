import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './TopCollector.module.scss';
import CollectorItem from './CollectorItem/CollectorItem';

const cx = classNames.bind(style);

const TopCollector = ({ title, classes }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    if (!posts.length && !isLoading) return 'No posts';

    return (
        <div className={cx('collector', classes)}>
            <h2>{title}</h2>
            <div className={cx('collector-wrapper')}>
                {isLoading ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id} className={cx('collector-item')}>
                                <Link to="/detail">
                                    <CollectorItem post={post} />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default TopCollector;
