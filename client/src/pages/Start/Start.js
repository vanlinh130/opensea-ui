import classNames from 'classnames/bind';
import styles from './Start.module.scss';

const cx = classNames.bind(styles);

function Start() {
    return (
        <div className={cx('start')}>
            <h1>Collection starts</h1>
            <div className={cx('start-nav')}></div>
            <div className={cx('start-')}></div>
            <div className={cx('start-nav')}></div>
        </div>
    );
}

export default Start;
