import classNames from 'classnames/bind';
import styles from './Resource.module.scss';
import Header from '~/components/Header/Header';
import Footer from '~/layouts/Components/Footer/Footer';

const cx = classNames.bind(styles);

function Resource() {
    return (
        <>
            <Header title="Resource" avatar classes={cx('header')} />
            <div className={cx('learn')}>
                <div className={cx('learn-images')}></div>
                <div className={cx('learn-content')}>
                    <div className={cx('learn-content-left ')}>
                        <img src="" alt="" />
                    </div>
                    <div className={cx('learn-content-right ')}>
                        <h1>Your NFT journey starts here.</h1>
                        <span>
                            Guides, practical tips, and support articles for first-time creators, experienced
                            collectors, and everyone in between.
                        </span>
                        <button>Start Learning</button>
                    </div>
                </div>
            </div>
            <Footer btnFooter={false} />
        </>
    );
}

export default Resource;
