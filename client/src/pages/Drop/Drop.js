import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Drop.module.scss';
import DropItem from './DropItem/DropItem';
import Action from '~/components/Action/Action';

const cx = classNames.bind(styles);

function Drop() {
    const { posts } = useSelector((state) => state.posts);

    return (
        <div className={cx('wrapper')}>
            <h1>Drops</h1>
            <div className={cx('drop-nav')}>
                <Action title={'Action & upcoming'} />
                <Action title={'Past'} />
            </div>
            <>
                {!posts?.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <Link to="">
                                    <DropItem post={post} drop />
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
