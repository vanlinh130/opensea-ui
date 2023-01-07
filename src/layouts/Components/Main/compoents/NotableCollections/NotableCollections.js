import React from 'react';
import classNames from 'classnames/bind';

import styles from './NotableCollections.module.scss';
import CollectionItem from './CollectionItem/CollectionItem';

const cx = classNames.bind(styles);

const NotableCollections = () => {
    return (
        <div className={cx('collections')}>
            <h2>Notable collections</h2>
            <div className={cx('collections-wrapper')}>
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
            </div>
        </div>
    );
};

export default NotableCollections;
