import React from 'react';
import { Tabs } from 'antd';
import Trainimg from './Trainimg';
import Trainimg2 from './Trainimg2';
import 'antd/dist/antd.css'


const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

export function Tap2() {
    return(
        <div >
            <Tabs style ={{ paddingLeft : '20px'}} defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Detail" key="1">
                    <Trainimg/>
                </TabPane>

                <TabPane tab="Column" key="2">
                     <Trainimg2/>
                </TabPane>             
            </Tabs>
        </div>
    );
}

export default Tap2 ;