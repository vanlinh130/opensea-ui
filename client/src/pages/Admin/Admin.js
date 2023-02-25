import React from 'react';
import classNames from 'classnames/bind';
import styles from './Admin.modules.scss';
import Header from '~/components/Header/Header';
import Collection from '~/components/Collection/Collection';
import AdminItems from './AdminItems/AdminItems';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const Admin = () => {
    const posts = useSelector((state) => state.posts);
    return (
        <div>
            <Header title="ADMIN" />

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
                {!posts.length ? (
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
            </div>
        </div>
    );
};

export default Admin;
