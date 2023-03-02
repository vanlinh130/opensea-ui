import React from 'react';
import classNames from 'classnames/bind';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

import styles from './Admin.modules.scss';
import Header from '~/components/Header/Header';
import Collection from '~/components/Collection/Collection';
import AdminItems from './AdminItems/AdminItems';
import Paginate from '~/components/Pagination/Pagination';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Admin = () => {
    const { posts } = useSelector((state) => state.posts);
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    return (
        <div>
            <Header title="ADMIN" search />

            <div className={cx('admin-content')}>
                <div className={cx('admin-menu')}>
                    <div className={cx('admin-menu-info')}>
                        <Collection title="COLLECTIONS" classes={cx('menu-item')} />
                        <Collection title="NAMES" classes={cx('menu-item')} />
                        <Collection title="TITLES" classes={cx('menu-item')} />
                    </div>
                    <div className={cx('admin-menu-message')}>
                        <Collection title="MESSAGES" classes={cx('menu-item')} />
                    </div>
                    <div className={cx('admin-menu-action')}>
                        <Collection title="VOLUMES" classes={cx('menu-item')} />
                        <Collection title="TIMES" classes={cx('menu-item')} />
                        <Collection title="ACTIONS" classes={cx('menu-item')} />
                    </div>
                </div>
                {!posts?.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <AdminItems post={post} />
                            </div>
                        ))}
                    </>
                )}
                <div className={cx('paginate')}>
                    <Paper>
                        <Paginate page={page} />
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default Admin;
