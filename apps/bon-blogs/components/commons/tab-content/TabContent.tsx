import classNames from 'classnames';
import React, { useState } from 'react'
import MenuItem from '../../header/menu-item/MenuItem';
import styles from './TabContent.module.css'
const { container, listContainer, contentContainerClass } = styles;
export type TabValue = {
  title: string;
  contentComponent: JSX.Element | React.ReactNode | React.ReactElement
}
export type TabContentProps = {
  listTabs: TabValue[];
  backGroundColor?: string;
  textColor?: string;
}

const TabContent: React.FC<TabContentProps> = ({ listTabs, backGroundColor, textColor }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div className={classNames(container)}>

      <div className={classNames(listContainer)}>
        {listTabs?.map((tab, index) => <MenuItem onChangeActive={() => setActiveIndex(index)} key={tab.title} {...tab} isActive={index === activeIndex} isShowbottomActive={false} />)}
      </div>
      <div className={classNames(contentContainerClass)}>
        {listTabs[activeIndex].contentComponent}
      </div>
    </div>
  )
}

export default TabContent;