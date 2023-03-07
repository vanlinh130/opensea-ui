import classNames from 'classnames/bind';
import styles from './Resource.module.scss';
import Header from '~/components/Header/Header';
import Footer from '~/layouts/Components/Footer/Footer';
import images from '~/assets/images';
import ResourceItem from './ResourceItem/ResourceItem';

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
                            <div className={cx('card-video')}>
                                <img src={images.resource_video_1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('resource-list')}>
                <div className={cx('resource-title')}>
                    <h2>NFT 101</h2>
                    <span>Get comfortable with the basics.</span>
                </div>
                <div className={cx('resource-item')}>
                    <ResourceItem title="What is an NFT?" />
                </div>
            </div>

            <div className={cx('resource-list')}>
                <div className={cx('resource-title')}>
                    <h2>Intro to web3</h2>
                    <span>Learn more about web3 concepts.</span>
                </div>
                <div className={cx('resource-item')}>
                    <ResourceItem title="What is cryptocurrency?" />
                </div>
            </div>

            <div className={cx('resource-list')}>
                <div className={cx('resource-title')}>
                    <h2>Blockchain basics</h2>
                    <span>Understand the technology behind cryptocurrency and NFTs.</span>
                </div>
                <div className={cx('resource-item')}>
                    <ResourceItem title="What is blockchain?" />
                </div>
            </div>

            <div className={cx('resource-list')}>
                <div className={cx('resource-title')}>
                    <h2>Watch and learn</h2>
                    <span>Learn about important NFT concepts.</span>
                </div>
                <div className={cx('resource-item')}>
                    <ResourceItem title="What is blockchain?" />
                </div>
            </div>

            <Footer btnFooter={false} />
        </>
    );
}

export default Resource;
