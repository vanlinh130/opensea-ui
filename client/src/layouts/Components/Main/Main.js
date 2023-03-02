import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './Main.module.scss';
import Slide from './compoents/Slide/Slide';
import HomeTable from './compoents/HomeTable/HomeTable';
import NotableCollections from './compoents/NotableCollections/NotableCollections';
import TopCollector from './compoents/TopCollector/TopCollector';
import NFT from './compoents/NFT/NFT';
import Category from './compoents/Category/Category';
import { getPosts } from '~/actions/posts';
import { Paper } from '@material-ui/core';
import Paginate from '~/components/Pagination/Pagination';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Main() {
    const [currentId, setCurrentId] = useState(null);
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div className={cx('main')}>
            <Slide />
            <HomeTable currentId={currentId} setCurrentId={setCurrentId} />
            <NotableCollections setCurrentId={setCurrentId} />
            <TopCollector />
            <NFT />
            <Category />
            <Paper>
                <Paginate page={page} />
            </Paper>
        </div>
    );
}

export default Main;
