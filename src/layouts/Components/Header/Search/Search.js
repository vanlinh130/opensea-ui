import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = ({ placeholder }) => {
    return (
        <div className={cx('search')}>
            <div className={cx('search-input')}>
                <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                <input placeholder={placeholder} />
                <div className={cx('open-using')}>/</div>
            </div>
        </div>
    );
};

export default Search;
