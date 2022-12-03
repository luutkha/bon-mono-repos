import React, { useState } from 'react'
import type { NextPage } from 'next';
import styles from './PageLayout.module.css';
import Header from '../header/Header';
import classNames from 'classnames';
import Footer from '../footer/Footer';
import ModalContainer from './modal-container/ModalContainer';
import { useBgColor } from '../../redux/store';
const { container, pageContainer, pageContainerDecor, content, hrClass } = styles;

type PageLayoutProps = {
    children: JSX.Element | React.ReactNode | React.ReactElement
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const bgColor = useBgColor()
    return (
        <div className={classNames(pageContainer)} style={{ backgroundColor: bgColor }}>
            <div className={classNames(pageContainerDecor)}>
                <div className={classNames(container)}>
                    <div className={classNames(content)}>
                        <Header />
                        <hr className={classNames(hrClass)} />
                        {children}
                        <Footer />
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

export default PageLayout