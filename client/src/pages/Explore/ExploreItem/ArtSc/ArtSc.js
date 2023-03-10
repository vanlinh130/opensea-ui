import React from 'react';
import Marquee from 'react-fast-marquee';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './ArtSc.module.scss';
import Start from '~/pages/Start/Start';
import { Content, HeaderNav, HeaderTitle } from '../../Components';
import { Category, TopCollector } from '~/layouts/Components/Main/compoents';
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

const ArtSc = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <>
            <HeaderTitle title="Art Sc" />
            <HeaderNav classArtSc />
            <Marquee>
                <>
                    {!posts?.length ? (
                        <div />
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post._id}>
                                    <Content post={post} title="Art Sc" artSc />
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
                <TopCollector title="Art spotlight" />
                <TopCollector title="Trending in Digital Art" />
                <TopCollector title="Trending in Abstract Art" />
                <TopCollector title="Trending in Generative Art" />
                <Category />
            </div>

            <PaginationItem navigate="/explore/artScs" />
        </>
    );
};

export default ArtSc;
