import React, { PureComponent } from 'react'
import { Tabs } from 'antd';
import CompPanel from './components/index';

const TabPane = Tabs.TabPane;

class TabAppHome extends PureComponent {
  render () {
    return (
      <div style={
        {
          padding: '20px'
        }
      }>
        <Tabs>
          <TabPane tab="中文" key="1">
            <CompPanel type={"cn"} />
          </TabPane>
          <TabPane tab="英文" key="2">
            <CompPanel type={"en"} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default TabAppHome;
