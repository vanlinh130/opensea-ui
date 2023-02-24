import React from 'react';
import classNames from 'classnames/bind';
import styles from './CheckName.mudule.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const CheckName = ({ classes }) => {
    return (
        <>
            <FontAwesomeIcon className={cx('icon', classes)} icon={faCheck} />
        </>
    );
};

export default CheckName;
