import React from 'react'
import TabContent, { TabValue } from '../../commons/tab-content/TabContent'



const AboutMeTabContent = () => {
    const listTabs: TabValue[] = [
        { title: 'Tổng quan', contentComponent: <div>1</div> },
        { title: 'Kỹ năng', contentComponent: <div>2</div> },
        { title: 'Kinh nghiệm', contentComponent: <div>3</div> },
        { title: 'Học vấn', contentComponent: <div>4</div> },
        { title: 'Thông tin khác', contentComponent: <div>5</div> }
    ]
    return (
        <div>
            <TabContent listTabs={listTabs} />
        </div>
    )
}

export default AboutMeTabContent