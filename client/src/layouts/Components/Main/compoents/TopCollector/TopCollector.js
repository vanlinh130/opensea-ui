import React from 'react';
import classNames from 'classnames/bind';

import style from './TopCollector.module.scss';
import CollectorItem from './CollectorItem/CollectorItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const TopCollector = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <div className={cx('collector')}>
            <h2>Top collector buys today</h2>
            <div className={cx('collector-wrapper')}>
                {!posts.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
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
