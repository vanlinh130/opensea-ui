import React from 'react';
import classNames from 'classnames/bind';
import styles from './RangKings.module.scss';
import { HeaderNav, HeaderTitle, StartItems, StartMenu, StartView } from '../../Components';
import { useSelector } from 'react-redux';
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

const RangKings = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <div className={cx('start')}>
            <HeaderTitle title="RangKings" />
            <HeaderNav classRangKings />
            <StartView />
            <StartMenu />
            <>
                {!posts?.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <StartItems post={post} />
                            </div>
                        ))}
                    </>
                )}
            </>
            <PaginationItem navigate="/starts/rangKings" />
        </div>
    );
};

export default RangKings;
