import React, { Component } from "react";
import Popup from 'reactjs-popup';
import "./AddCategoryPopUp.css";

const AddCategoryPopUp = () => {
    return (
        <div>
            {/* <Popup
                trigger={<button className="button"> Click for More Info </button>}
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
            </Popup> */}
        </div>
    )
}

export default AddCategoryPopUp
