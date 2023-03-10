import React from 'react';
import classNames from 'classnames/bind';

import styles from './Memberships.module.scss';
import HeaderTitle from './../../Components/HeaderTitle/HeaderTitle';
import { Content, HeaderExplore } from '../../Components';
import Marquee from 'react-fast-marquee';
import Start from '~/pages/Start/Start';
import { Category, TopCollector } from '~/layouts/Components/Main/compoents';
import { PaginationItem } from '~/components/Pagination';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const Memberships = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <HeaderTitle title="Memberships" />
            <HeaderExplore />
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Content post={post} title="Memberships" memberships />
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
                <TopCollector title="Trending in Digital Memberships" />
                <TopCollector title="Trending in Art" />
                <TopCollector title="Trending in Memberships" />
                <Category />
            </div>

            <PaginationItem navigate="/explore/gaming" />
        </>
    );
};

export default Memberships;
