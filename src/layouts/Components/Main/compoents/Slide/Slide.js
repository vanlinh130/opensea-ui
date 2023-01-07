import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Slide() {
    return (
        <div className={cx('slide')}>
            <div className={cx('slide-content')}>
                <h1>Explore, collect, and sell NFTs</h1>
            </div>
            <div className={cx('slide-list')}>
                <button className={cx('chevron-icon', 'icon-left')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <Link to="/detail">
                    <div className={cx('slide-item')}>
                        <img src={images.slide_1} alt="slide-1" />
                        <div className={cx('box')}></div>
                        <div className={cx('info')}>
                            <div>
                                <h5>Soul Story</h5>
                                <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            </div>
                            <span>Floor: 0,2 ETH</span>
                        </div>
                    </div>
                </Link>
                <div className={cx('slide-item')}>
                    <img src={images.slide_2} alt="slide-1" />
                    <div className={cx('info')}>
                        <div>
                            <h5>Thingdoms</h5>
                        </div>
                        <span>Floor: 0,04 ETH</span>
                    </div>
                </div>
                <div className={cx('slide-item')}>
                    <img src={images.slide_3} alt="slide-1" />
                    <div className={cx('info')}>
                        <div>
                            <h5>AI x Ordinary People</h5>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                        </div>
                        <span>Floor: 0,3 ETH</span>
                    </div>
                </div>
                <div className={cx('slide-item')}>
                    <img src={images.slide_4} alt="slide-1" />
                    <div className={cx('info')}>
                        <div>
                            <h5>MoonGrace</h5>
                        </div>
                        <span>Floor: 0,28 ETH</span>
                    </div>
                </div>
                <button className={cx('chevron-icon', 'icon-right')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}

export default Slide;
