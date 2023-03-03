import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { NFT, Slide, TopCollector } from '~/layouts/Components/Main/compoents';
import { Paper } from '@material-ui/core';
import Paginate from '~/components/Pagination/Pagination';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Explore() {
    const query = useQuery();
    const page = query.get('page') || 1;

    return (
        <div className={cx('explore')}>
            <Slide title="Explore All NETs" />
            <TopCollector title="Explore buys today" classes={cx('top-collector')} />
            <NFT title="Explore Photography NFT spotlight" />

            <div className={cx('paginate')}>
                <Paper>
                    <Paginate page={page} navigate="/explore" />
                </Paper>
            </div>
        </div>
    );
}

export default Explore;
