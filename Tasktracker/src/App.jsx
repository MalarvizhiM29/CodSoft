import React, { useState } from 'react'
import Header from './components/Header'
import "./App.css"
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea'

const App = () => {

  const [notes,setNotes] = useState([]);

  function addnote(newNote){
    setNotes(prevNotes =>{
      return [...prevNotes,newNote]
    })
  }

  function deleteNode(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header/>
      <CreateArea onAdd={addnote}/>
      {notes.map((noteItem, index)=>{
        return <Note 
          key={index}
          id={index}
          title={noteItem.title} 
          content={noteItem.content} 
          onDelete={deleteNode}
        />
      })}
      <Footer/>
    </div>
  )
}

export default App