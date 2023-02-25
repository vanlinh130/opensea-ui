import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Marquee from 'react-fast-marquee';

import styles from './NotableCollections.module.scss';
import CollectionItem from './CollectionItem/CollectionItem';
import Pagination from '~/components/Pagination/Pagination';
const cx = classNames.bind(styles);

const NotableCollections = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    // console.log(posts);
    return !posts.length ? (
        <div />
    ) : (
        <>
            <h2>Notable collections</h2>
            <div className={cx('collections')}>
                <Marquee play={false}>
                    {posts.map((post) => (
                        <div key={post._id}>
                            <Link to="">
                                <CollectionItem post={post} setCurrentId={setCurrentId} />
                            </Link>
                        </div>
                    ))}
                </Marquee>
            </div>
            <Paper>
                <Pagination />
            </Paper>
        </>
    );
};

export default NotableCollections;
