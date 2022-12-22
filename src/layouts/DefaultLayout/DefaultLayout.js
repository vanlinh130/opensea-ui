import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
