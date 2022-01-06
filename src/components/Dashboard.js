import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div >
            <h1 className = "dashboardPage">Dashboard</h1>
            <Tabs>
                <TabList className = "tabList">
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                    <Tab>Title 4</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Dashboard
