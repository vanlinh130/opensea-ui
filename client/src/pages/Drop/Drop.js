import classNames from 'classnames/bind';
import styles from './Drop.module.scss';
import { useSelector } from 'react-redux';
import DropItem from './DropItem/DropItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Drop() {
    const posts = useSelector((state) => state.posts);

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
            <>
                {!posts.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <Link to="">
                                    <DropItem post={post} />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </>
        </div>
    );
}

export default Drop;
