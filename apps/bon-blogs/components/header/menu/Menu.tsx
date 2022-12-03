import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import MenuItem, { MenuItemProps } from '../menu-item/MenuItem'
import styles from './Menu.module.css'
const { container } = styles
type MenuProps = {
    currentPage?: string;
}
const listMenuValue: MenuItemProps[] = [
    {
        title: 'TRANG CHỦ',
        navigateTo: '/'
    },
    {
        title: 'LẬP TRÌNH',
        navigateTo: '/dev'
    },
    {
        title: 'SÁCH',
        navigateTo: '/books'
    },
    {
        title: 'ABOUT ME',
        navigateTo: '/me'

    },
]
const Menu: React.FC<MenuProps> = () => {
    const router = useRouter();
    const currentIndex = listMenuValue.findIndex((obj) => obj.navigateTo === router.pathname)
    const [activeIndex, setActiveIndex] = useState<number>(currentIndex)
    return (
        <div className={classNames(container)}>
            {listMenuValue.map((obj, index) => <MenuItem onChangeActive={() => setActiveIndex(index)} key={obj.title} {...obj} isActive={index === activeIndex} />)}
        </div>
    )
}

export default Menu
