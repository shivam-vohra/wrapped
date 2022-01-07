import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Dashboard.css";
import HomeTabPanel from './HomeTabPanel';
import CategoryTabPanel from './CategoryTabPanel';
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
                    <Popup
                        trigger={<Tab>+</Tab>}
                        modal
                        nested
                        className="popup"
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="form">
                                    <h1 className="form-heading">Add Category</h1>
                                    <div>
                                        <label>Category Name</label>
                                        <input className="input" onChange={nameChangeHandler}></input>
                                    </div>
                                    <div>
                                        <label>Category Budget</label>
                                        <input className="input"></input>
                                    </div>
                                    <button className = 'form-button' onClick={() => { onClick(); close() }}>Save Category</button>
                                </div>
                                <div className="actions">
                                </div>
                            </div>
                        )}
                    </Popup>


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

                </div>
            </Tabs>
        </div>

    )
}

export default Dashboard
