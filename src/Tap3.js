import React from 'react';
import { Tabs } from 'antd';
import Graphtrain from './Graphtrain';
import Graphtrain2 from './Graphtrain2';
import Graphtrain3 from './Graphtrain3';
import 'antd/dist/antd.css'


const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

export function Tap3() {
    return(
        <div >
            <Tabs style ={{ paddingLeft : '20px'}} defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Detail" key="1">
                    <Graphtrain/> 
                </TabPane>

                <TabPane tab="Column" key="2">
                    <Graphtrain2/>
                </TabPane>

                <TabPane tab="Graph" key="3">
                    <Graphtrain3/>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Tap3 ;