import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Calendar.module.scss';
import { Link } from 'react-router-dom';
import { PaginationItem } from '~/components/Pagination';
import { Content, HeaderNav } from '../../Components';

const cx = classNames.bind(styles);

const Calendar = () => {
    const { posts } = useSelector((state) => state.posts);

    return (
        <div className={cx('wrapper')}>
            <h1>Calendars</h1>
            <HeaderNav classCalendar />
            <>
                {!posts?.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <Link to="">
                                    <Content post={post} title="Calendar" calendar />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </>

            <PaginationItem navigate="/drops/calendars" />
        </div>
    );
};

export default Calendar;
