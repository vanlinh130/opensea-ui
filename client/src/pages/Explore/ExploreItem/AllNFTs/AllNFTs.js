import React from 'react';
import classNames from 'classnames/bind';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';

import styles from './AllNFTs.module.scss';
import { Content, HeaderNav, HeaderTitle } from '../../Components';
import { Category, TopCollector } from '~/layouts/Components/Main/compoents';
import Start from '~/pages/Start/Start';
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

const AllNFTs = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <HeaderTitle title="All NETs" />
            <HeaderNav classAllNFTs />
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Content post={post} title="All NFTs" allNFTs />
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
                <TopCollector title="International Women's Day Spotlight" />
                <TopCollector title="Trending in All NETs" />
                <TopCollector title="Trending in Gaming" />
                <Category />
            </div>

            <PaginationItem navigate="/explore/allNFTs" />
        </>
    );
};

export default AllNFTs;
