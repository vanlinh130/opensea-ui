import React from 'react';
import classNames from 'classnames/bind';

import styles from './Music.module.scss';
import HeaderTitle from './../../Components/HeaderTitle/HeaderTitle';
import { Content, HeaderNav } from '../../Components';
import Marquee from 'react-fast-marquee';
import Start from '~/pages/Start/Start';
import { Category, TopCollector } from '~/layouts/Components/Main/compoents';
import { PaginationItem } from '~/components/Pagination';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const Music = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <HeaderTitle title="Music" />
            <HeaderNav classMusic />
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Content post={post} title="Music" />
                                </div>
                            ))}
                        </>
                    )}
                </>
            </Marquee>
            <div className={cx('slide')}>
                <Start title={false} nav={false} paginate={false} />
            </div>
            <div className={cx('content')}>
                <TopCollector title="Top Collector Buys Today" />
                <TopCollector title="Trending in Digital Music" />
                <TopCollector title="Trending in Art" />
                <TopCollector title="Trending in Music" />
                <Category />
            </div>

            <PaginationItem navigate="/express/music" />
        </>
    );
};

export default Music;
