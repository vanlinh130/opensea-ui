import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Drop.module.scss';
import { PaginationItem } from '~/components/Pagination';
import { Content, HeaderNav } from './Components';

const cx = classNames.bind(styles);

function Drop() {
    const { posts } = useSelector((state) => state.posts);

    return (
        <div className={cx('wrapper')}>
            <h1>Drops</h1>
            <HeaderNav classDrops />
            <>
                {!posts?.length ? (
                    <div />
                ) : (
                    <>
                        {posts.map((post) => (
                            <div key={post._id}>
                                <Link to="">
                                    <Content post={post} title="Drops" drop />
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </>
            <PaginationItem navigate="/drops" />
        </div>
    );
}

export default Drop;
