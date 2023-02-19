import classNames from 'classnames/bind';
import Header from '../Components/Header';
import styles from './index.modules.scss';
import Footer from '../Components/Footer/Footer';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;
