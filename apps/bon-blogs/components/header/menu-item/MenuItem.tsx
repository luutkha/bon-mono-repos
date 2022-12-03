import React from 'react'
import styles from './MenuItem.module.css'
import classNames from 'classnames';
import Link from 'next/link';

export type MenuItemProps = {
    title: string;
    isActive?: boolean;
    onChangeActive?: React.MouseEventHandler<HTMLDivElement>;
    navigateTo?: string;
    isShowbottomActive?: boolean;
}
const { container, textStyles, activeStyles, active } = styles
const MenuItem: React.FC<MenuItemProps> = ({ title, isActive = false, onChangeActive, navigateTo, isShowbottomActive = true }) => {
    return (
        <>
            {navigateTo ? <Link href={navigateTo}>
                <div onClick={onChangeActive} className={classNames(container, { [active]: isActive })}>

                    <div className={classNames(textStyles)}>
                        {title}
                    </div>
                    {isActive && isShowbottomActive && <div className={classNames(activeStyles)} />}

                </div>
            </Link> : <div >
                <div onClick={onChangeActive} className={classNames(container, { [active]: isActive })}>

                    <div className={classNames(textStyles)}>
                        {title}
                    </div>
                    {isActive && isShowbottomActive && <div className={classNames(activeStyles)} />}

                </div>
            </div>}

        </>
    )
}

export default MenuItem