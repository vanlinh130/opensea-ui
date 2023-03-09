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
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

function Main() {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div className={cx('main')}>
            <Slide title="Explore, collect, and sell NFTs" />
            <HomeTable currentId={currentId} setCurrentId={setCurrentId} />
            <NotableCollections setCurrentId={setCurrentId} />
            <TopCollector title="Top collector buys today" />
            <NFT title="Photography NFT spotlight" />
            <Category />

            <PaginationItem navigate="/home" />
        </div>
    );
}

export default Main;
