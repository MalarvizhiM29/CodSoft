import React, { useEffect, useState } from 'react'
import CreateTask from '../modals/createTask';
import Card from './Card';

const Tasktracker = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(()=>{
        let arr = localStorage.getItem("taskList");
        
        if(arr){
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    },[])

    const deleteTask = (index) => {
      let tempList = taskList
      tempList.splice(index,1)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setModal(false)
      setTaskList(tempList)
      window.location.reload()
    }

    const toggle = () => setModal(!modal);

    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    const updateListArray = (obj, index) => {
      let tempList = taskList
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
    }

  return (
    <>
        <div className='header text-center'>
            <h3>Task Tracker</h3>
             <button className='btn btn-info mt-2' onClick={()=> setModal(true)}>Create Task</button>
        </div>
        <div className='task-container'>
          {taskList && taskList.map((obj, index)=> <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
        </div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    </>
  )
}

export default Tasktracker