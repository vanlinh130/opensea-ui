import React from 'react';
import classNames from 'classnames/bind';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';

import styles from './Photography.module.scss';
import Start from '~/pages/Start/Start';
import { Content, HeaderTitle, HeaderNav } from '../../Components';
import { Category, TopCollector } from '~/layouts/Components/Main/compoents';
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

const Photography = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <HeaderTitle title="Photography" />
            <HeaderNav classPhotography />
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Content post={post} title="Photography" photography />
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
                <TopCollector title="Trending in Digital Photography" />
                <TopCollector title="Trending in Art" />
                <TopCollector title="Trending in Photography" />
                <Category />
            </div>

            <PaginationItem navigate="/express/photography" />
        </>
    );
};

export default Photography;
