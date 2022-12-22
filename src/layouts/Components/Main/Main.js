import classNames from 'classnames/bind';
import styles from './Main.module.scss';

const cx = classNames.bind(styles);

function Main() {
    return <h2 className={cx()}>Main Pages</h2>;
}

export default Main;
