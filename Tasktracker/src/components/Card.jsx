import React, { useState } from 'react'
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
  }

  const updateTask = (obj) =>{
    updateListArray(obj, index)
  }

  const handleDelete = () =>{
    deleteTask(index)
  }

  return (
    <div className = "card-wrapper">
            <div className = "card-top"></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": "#F2FAF1", "borderRadius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className="fa-solid fa-check icon"></i>
                    <i className = "far fa-edit icon" onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt icon" onClick={handleDelete}></i>
                </div>
            </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
    </div>
  )
}

export default Card