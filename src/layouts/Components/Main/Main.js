import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Slide from './compoents/Slide/Slide';
import HomeTable from './compoents/HomeTable/HomeTable';
import NotableCollections from './compoents/NotableCollections/NotableCollections';
import TopCollector from './compoents/TopCollector/TopCollector';
import NFT from './compoents/NFT/NFT';
import Category from './compoents/Category/Category';

const cx = classNames.bind(styles);

function Main() {
    return (
        <div className={cx('main')}>
            <Slide />
            <HomeTable />
            <NotableCollections />
            <TopCollector />
            <NFT />
            <Category />
        </div>
    );
}

export default Main;
