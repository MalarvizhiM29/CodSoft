import React, { useEffect, useState } from 'react'
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

  const [modal, setModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(()=>{
     const completedStatus = localStorage.getItem(`task_${index}_completed`);
     if(completedStatus){
      setCompleted(JSON.parse(completedStatus))
     }
  })

  const toggle = () => {
    setModal(!modal)
  }

  const updateTask = (obj) =>{
    updateListArray(obj, index)
  }

  const handleDelete = () =>{
    deleteTask(index)
  }

  const handleComplete = () =>{
    const newCompletedStatus = !completed;
    setCompleted(newCompletedStatus);
    localStorage.setItem(`task_${index}_completed`,JSON.stringify(newCompletedStatus))
  }

  return (
    <div className = {`card-wrapper ${completed ? 'completed' : ''}`}>
            <div className = "card-top"></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": "#0DCAF0", "borderRadius": "10px"}}>{taskObj.Name}</span>
                <p className = "ml-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className="fa-solid fa-check icon" onClick={handleComplete}></i>
                    <i className = "far fa-edit icon" onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt icon" onClick={handleDelete}></i>
                </div>
            </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
    </div>
  )
}

export default Card