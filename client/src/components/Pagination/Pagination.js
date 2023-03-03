import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '~/actions/posts';
import styles from './Pagination.module.scss';
const cx = classNames.bind(styles);

function Paginate({ page, navigate }) {
    const { numberOfPages } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (page) dispatch(getPosts(page));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <Pagination
            className={cx('pagination')}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            renderItem={(item) => <PaginationItem {...item} component={Link} to={`${navigate}?page=${item.page}`} />}
        />
    );
}

export default Paginate;
