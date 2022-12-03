import React from 'react'
import Menu from './menu/Menu'
import styles from './Header.module.css'
import classNames from 'classnames';
import Logo from 'libs/common/src/atoms/logo/Logo';
const { container } = styles;
const Header = () => {
    return (
        <div className={classNames(container)}>
            <Logo />
            <Menu />
            <div>
                action buttons
            </div>
        </div>
    )
}

export default Header

