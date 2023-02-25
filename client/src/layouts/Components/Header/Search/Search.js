import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = ({ placeholder }) => {
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            //   searchPost();
        }
    };

    return (
        <div className={cx('search')}>
            <div className={cx('search-input')}>
                <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                <input
                    name="search"
                    value={search}
                    placeholder={placeholder}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className={cx('open-using')}>/</div>
            </div>
        </div>
    );
};

export default Search;
