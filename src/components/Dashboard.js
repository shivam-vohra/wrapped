import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Dashboard.css";
import HomeTabPanel from './HomeTabPanel';
import CategoryTabPanel from './CategoryTabPanel';
import AddCategoryPopUp from './AddCategoryPopUp';
import Popup from 'reactjs-popup';
import "./AddCategoryPopUp.css";

const Dashboard = ({ categories, onCategoryAdded }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const [categoryName, setName] = useState("");

    const nameChangeHandler = (event) => {
        setName(event.target.value);
        console.log(categoryName)
    }

    const onClick = () => {
        let sample = categories;
        sample.push(categoryName);
        //setCategories(arr => [...arr, categoryName]);
        onCategoryAdded([...sample]);
    };

    return (
        <div >
            <h1 className="dashboardPage"><b>Dashboard</b> Hi, Name</h1>
            <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <TabList className="tabList">
                    {/* <Tab>Home</Tab>
                    <Tab>Food</Tab>
                    <Tab>Education</Tab> */}
                    {categories.map((category) => (
                        <Tab>{category}</Tab>
                    ))}
                    <Tab>+</Tab>

                </TabList>

                <div>

                    {categories.map((category2) => {
                        // if (category2 === "+") {
                        //     return <TabPanel>
                        //         <h1>Add Category</h1>
                        //         <label>Category Name</label>
                        //         <input onChange={nameChangeHandler}></input>
                        //         <button onClick={onClick}>Save Category</button>
                        //     </TabPanel>
                        // } else 
                        if (category2 === "Home") {
                            return <TabPanel>
                                <HomeTabPanel />
                            </TabPanel>
                        } else {
                            return <TabPanel>
                                <CategoryTabPanel categoryName={category2} />
                            </TabPanel>
                        }
                    }

                    )}
                    <TabPanel>
                        {/* <AddCategoryPopUp /> */}
                        <Popup
                            // trigger={<button className="button"> Click for More Info </button>}
                            modal
                            nested
                            className="popup"
                        >
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <h1>Add Category</h1>
                                    <br />
                                    <label>Category Name</label>
                                    <input onChange={nameChangeHandler}></input>
                                    <button onClick={onClick}>Save Category</button>
                                    <div className="actions">
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </TabPanel>
                </div>
            </Tabs>
        </div>

    )
}

export default Dashboard
