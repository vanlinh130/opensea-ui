import classNames from 'classnames/bind';
import styles from './Resource.module.scss';
import Header from '~/components/Header/Header';
import Footer from '~/layouts/Components/Footer/Footer';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Resource() {
    return (
        <>
            <Header title="Resource" avatar classes={cx('header')} />
            <div className={cx('learn')}>
                <div className={cx('learn-images')}></div>
                <div className={cx('learn-container')}>
                    <div className={cx('learn-content')}>
                        <div className={cx('learn-content-left')}>
                            <img src={images.resource_1} className={cx('img-one')} alt="images-resource" />
                            <img src={images.resource_2} className={cx('img-three')} alt="images-resource" />
                        </div>
                        <div className={cx('learn-content-right')}>
                            <h1>Your NFT journey starts here.</h1>
                            <span>
                                Guides, practical tips, and support articles for first-time creators, experienced
                                collectors, and everyone in between.
                            </span>
                            <button className={cx('btn-content')}>Start Learning</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('video')}>
                <div className={cx('video-content')}>
                    <div className={cx('video-content-title')}>
                        <h2>Meet OpenSea</h2>
                        <span>
                            Allow us to introduce ourselves! Hear from our CEO, Devin Finzer, about who we are, how we
                            started, and where we're headed.
                        </span>
                    </div>
                    <div className={cx('video-content-card')}>
                        <div className={cx('cart')}>
                            <div className={cx('card-link')}>
                                <img src={images.resource_card_1} alt="" />
                                <span>Who is OpenSea?</span>
                            </div>
                            <div className={cx('card-video')}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer btnFooter={false} />
        </>
    );
}

export default Resource;
