import React, { useState, useEffect } from 'react';
import {Button, InputLabel , FormControl , Input} from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id , todo:doc.data().todo})))
    })
  } , [] );
  
  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo:input , 
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }



  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Enter your todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}></Input>
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add todo</Button>
        {/* <button type="submit" onClick={addTodo}>Add todo</button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
