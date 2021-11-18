import React from 'react';
import { Tabs } from 'antd';
import Graphsim from './Graphsim';
import Graphsim2 from './Graphsim2';
import Graphsim3 from './Graphsim3';
import 'antd/dist/antd.css'

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

export function Tap() {
    return(
        <div >
            <Tabs style ={{ paddingLeft : '10px'}} defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Detail" key="1">
                    <Graphsim/> 
                </TabPane>

                <TabPane tab="Column" key="2">
                    <Graphsim2/>
                </TabPane>

                <TabPane tab="Graph" key="3">
                    <Graphsim3/>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Tap ;