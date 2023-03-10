import React from 'react';
import classNames from 'classnames/bind';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';

import styles from './Gaming.mudule.scss';
import Start from '~/pages/Start/Start';
import { Content, HeaderTitle, HeaderNav } from '../../Components';
import { Category, TopCollector } from '~/layouts/Components/Main/compoents';
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

const Gaming = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <HeaderTitle title="Gaming" />
            <HeaderNav classGaming />
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Content post={post} title="Gaming" gaming />
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
                <TopCollector title="Trending in Digital Gaming" />
                <TopCollector title="Trending in Art" />
                <TopCollector title="Trending in Gaming" />
                <Category />
            </div>

            <PaginationItem navigate="/explore/gaming" />
        </>
    );
};

export default Gaming;
