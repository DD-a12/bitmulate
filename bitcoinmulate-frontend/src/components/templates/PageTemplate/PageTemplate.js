import React from 'react';
import classNames from 'classnames';
import styles from './PageTemplate.scss'

const cx = classNames.bind(styles);

const PageTemplate = ({header, children}) => {
    <div classNames={cx('page')}>
        <header>
            {header}
        </header>
        <div classNames={cx('content', {
            'has-header': header // if there is a header, gives 3.5 padding to top
        })}>
            {children}
        </div>
    </div>
}

export default PageTemplate; 