import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { TopCollector } from '~/layouts/Components/Main/compoents';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('explore')}>
            <TopCollector />
        </div>
    );
}

export default Explore;
