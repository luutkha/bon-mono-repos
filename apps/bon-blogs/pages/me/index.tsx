/* eslint-disable react-hooks/rules-of-hooks */
import classNames from 'classnames';
import React, { useEffect } from 'react'
import { Color } from '../../constants/common';
import styles from './index.module.css'
import avatar from '../../public/assets/imgs/about-me/about-me-01.png'
import Image from 'next/image';
import Menu from '../../components/header/menu/Menu';
import AboutMeTabContent from '../../components/pages/about-me/AboutMeTabContent';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import { setBgColor } from '../../redux/slices/bg-color.slice';
type Props = {}
const { container, leftContentClass, titleClass, rightContentClass, imageClass } = styles;
const index: React.FC<Props> = ({ }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setBgColor('#72BACD')
    )

  }, [])


  return (
    <div className={classNames(container)}>
      <Row >
        <Col lg={8} sm={12}>
          {/* <div className={classNames(leftContentClass)}> */}
          <div className={classNames(titleClass)}>About <span style={{ color: Color.DEFAULT_PRIMARY_COLOR }}>me</span></div>
          <AboutMeTabContent />
          {/* </div> */}
        </Col>
        <Col lg={4} sm={12}>
          {/* <div className={classNames(rightContentClass)}> */}
          <div className={classNames(imageClass)}>
            <Image src={avatar} color={'white'} />
          </div>
          {/* </div> */}
        </Col>
      </Row>
    </div>
  )
}

export default index