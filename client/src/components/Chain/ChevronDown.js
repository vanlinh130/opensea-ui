import React from 'react';
import classNames from 'classnames/bind';
import styles from './Chains.modules.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ChevronDown = ({ title, classes }) => {
    return (
        <>
            <button className={cx('view-btn', 'time-btn', classes)}>
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </>
    );
};

export default ChevronDown;
