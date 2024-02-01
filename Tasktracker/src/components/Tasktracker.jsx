import React, { useEffect, useState } from 'react'
import CreateTask from '../modals/createTask';

const Tasktracker = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(()=>{
        let arr = localStorage.getItem("taskList");
        
        if(obj){
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    })

    const toggle = () => setModal(!modal);

    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

  return (
    <>
        <div className='header text-center'>
            <h3>Tasktracker</h3>
             <button className='btn btn-info mt-2' onClick={()=> setModal(true)}>Create Task</button>
        </div>
        <div className='task-container'>
          {taskList.map((obj)=> <li>{obj.Name}</li>)}
        </div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    </>
  )
}

export default Tasktracker