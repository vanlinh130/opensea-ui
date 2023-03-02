import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Calendar.module.scss';
import Action from '~/components/Action/Action';
import { Link } from 'react-router-dom';
import DropItem from '../../DropItem/DropItem';

const cx = classNames.bind(styles);

const Calendar = () => {
    const { posts } = useSelector((state) => state.posts);

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
        </div>
    );
};

export default Calendar;
