import classNames from 'classnames/bind';
import styles from './Drop.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Drop() {
    return (
        <div className={cx('wrapper')}>
            <h1>Drops</h1>
            <div className={cx('drop-nav')}>
                <button className={cx('nav-btn')}>
                    <span>Action & upcoming</span>
                </button>
                <button className={cx('nav-btn')}>
                    <span>Past</span>
                </button>
            </div>
            <div className={cx('drop-content')}>
                <div className={cx('content-img')}>
                    <img src={images.collector_1} alt="images-content" />
                </div>
                <div className={cx('content-info')}>
                    <div className={cx('info-img')}>
                        <img src={images.detail_item} alt="images-info" />
                    </div>
                    <div className={cx('info-list')}>
                        <div className={cx('info-item')}>
                            <h1>NFT Yearbook</h1>
                            <span>By MetaversePublishing</span>
                            <span>3.000 items - 0.1195 ETH</span>
                            <button>MINTING NOW</button>
                        </div>
                        <div className={cx('info-item')}>
                            <button>View drop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drop;
