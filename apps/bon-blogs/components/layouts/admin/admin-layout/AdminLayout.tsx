import React, { useState } from 'react'
import type { NextPage } from 'next';
import styles from './AdminLayout.module.css';
import classNames from 'classnames';
import ModalContainer from '../../modal-container/ModalContainer';
import { useBgColor } from '../../../../redux/store';
const { container, pageContainer, pageContainerDecor, content, hrClass } = styles;

type AdminLayoutProps = {
    children: JSX.Element | React.ReactNode | React.ReactElement
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const bgColor = useBgColor()
    return (
        <div className={classNames(pageContainer)} style={{ backgroundColor: bgColor }}>
            <div className={classNames(pageContainerDecor)}>
                <div className={classNames(container)}>
                    <div className={classNames(content)}>
                        {children}
                    </div>
                </div>
            </div>
            <div>
                <ModalContainer show={isShowModal} onHide={() => setIsShowModal(false)} >
                    <div>a</div>
                </ModalContainer>
            </div>
        </div >
    )
}

export default AdminLayout