import './App.css';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from './ToDo';
import { FaSteam } from "react-icons/fa";

function App() {

  const [todos, setToDos] = useState([]);

  const [toDoInput, setToDoInput] = useState ("");

  useEffect(() => { getToDos() }, []); //blank to run on first launch

  const getToDos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setToDos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress : doc.data().inprogress,
        }))
      );
    })
  }

  const addToDo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: toDoInput,
    });
    setToDoInput("");
  }

  return ( 
    <div className="App">
      <div className="container">
        <div>
          <h1>Welcome to my To Do App!</h1>
          <FaSteam />
        </div>
        <form>
          <TextField 
            id="standard-basic" 
            label="Write a label :v" 
            value={toDoInput}
            onChange={(e) => setToDoInput(e.target.value)}
          />
          <Button type="submit" variant="contained" onClick={addToDo}>Post</Button>
        </form>
        {todos.map((toDoValue) => (
          <TodoListItem toDoValue={toDoValue.todo} inprogress={toDoValue.inprogress} id={toDoValue.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
