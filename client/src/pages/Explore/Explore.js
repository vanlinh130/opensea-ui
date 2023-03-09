import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { NFT, Slide, TopCollector } from '~/layouts/Components/Main/compoents';
import { PaginationItem } from '~/components/Pagination';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('explore')}>
            <Slide title="Explore All NETs" />
            <TopCollector title="Explore buys today" classes={cx('top-collector')} />
            <NFT title="Explore Photography NFT spotlight" />
            <PaginationItem navigate="/explore" />
        </div>
    );
}

export default Explore;
