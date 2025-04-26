import React from 'react';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { Paper } from '@mui/material';

import styles from './PaginationItem.module.scss';
import Paginate from '../Pagination';

const cx = classNames.bind(styles);
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const PaginationItem = ({ navigate, classes }) => {
    const query = useQuery();
    const page = query.get('page') || 1;

    return (
        <>
            <div className={cx('paginate', classes)}>
                <Paper>
                    <Paginate page={page} navigate={navigate} />
                </Paper>
            </div>
        </>
    );
};

export default PaginationItem;
