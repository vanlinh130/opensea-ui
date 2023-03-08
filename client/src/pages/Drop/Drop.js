import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import styles from './Drop.module.scss';
import DropItem from './DropItem/DropItem';
import Action from '~/components/Action/Action';
import { Paper } from '@material-ui/core';
import Paginate from '~/components/Pagination/Pagination';

const cx = classNames.bind(styles);

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Drop() {
    const { posts } = useSelector((state) => state.posts);

    const query = useQuery();
    const page = query.get('page') || 1;

    return (
        <div className={cx('wrapper')}>
            <h1>Drops</h1>
            <div className={cx('drop-nav')}>
                <Action title={'Action & upcoming'} />
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
                                    <DropItem post={post} drop />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </>
            <div className={cx('paginate')}>
                <Paper>
                    <Paginate page={page} navigate="/drops" />
                </Paper>
            </div>
        </div>
    );
}

export default Drop;
