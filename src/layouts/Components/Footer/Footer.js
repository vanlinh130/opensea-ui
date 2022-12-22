import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return <h2 className={cx()}>Footer Pages</h2>;
}

export default Footer;
