import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Toast } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTask = ({modal , toggle, save}) => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }

    const handleSave = (e) =>{
        e.preventDefault()

        if (!taskName || !description) {
          toast.error('Please fill in all required fields')
          return;
        }

        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)

        setTaskName('');
        setDescription('');
        toggle();
    }

  return (
    <>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
                <label>Task Name</label>
                <input type='text' className='form-control' value={taskName} onChange={handleChange} name='taskName'/>
            </div>
            <div className='form-group'>
                <label>Description</label>
                <textarea rows="5" className='form-control' value={description} onChange={handleChange} name='description' ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <ToastContainer/>
    </>
  )
}

export default CreateTask