import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { NFT, Slide, TopCollector } from '~/layouts/Components/Main/compoents';
import { PaginationItem } from '~/components/Pagination';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import { HeaderTitle } from './Components';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('explore')}>
            <HeaderTitle title="All" />
            <HeaderNav classAll />
            <Slide explore={false} />
            <TopCollector title="Explore buys today" classes={cx('top-collector')} />
            <NFT title="Explore Photography NFT spotlight" />
            <PaginationItem navigate="/explore" />
        </div>
    );
}

export default Explore;
