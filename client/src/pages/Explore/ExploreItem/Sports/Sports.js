import React from 'react';
import classNames from 'classnames/bind';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';

import styles from './Sports.module.scss';
import Start from '~/pages/Start/Start';
import { Content, HeaderTitle, HeaderNav } from '../../Components';
import { TopCollector, Category } from '~/layouts/Components/Main/compoents';
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

const Sports = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <HeaderTitle title="Sports" />
            <HeaderNav classSports />
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Content post={post} title="Sports" />
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
                <TopCollector title="Trending in Digital Sports" />
                <TopCollector title="Trending in Art" />
                <TopCollector title="Trending in Sports" />
                <Category />
            </div>

            <PaginationItem navigate="/express/sports" />
        </>
    );
};

export default Sports;
