import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Calendar.module.scss';
import Action from '~/components/Action/Action';
import { Link, useLocation } from 'react-router-dom';
import DropItem from '../../DropItem/DropItem';
import { Paper } from '@material-ui/core';
import Paginate from '~/components/Pagination/Pagination';

const cx = classNames.bind(styles);
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Calendar = () => {
    const { posts } = useSelector((state) => state.posts);

    const query = useQuery();
    const page = query.get('page') || 1;

    return (
        <div className={cx('wrapper')}>
            <h1>Calendars</h1>
            <div className={cx('drop-nav')}>
                <Action title={'Upcoming'} />
                <Action title={'Past'} />
            </div>
            <>
                {!posts?.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <Link to="">
                                    <DropItem post={post} calendar />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </>

            <div className={cx('paginate')}>
                <Paper>
                    <Paginate page={page} navigate="/calendars" />
                </Paper>
            </div>
        </div>
    );
};

export default Calendar;
