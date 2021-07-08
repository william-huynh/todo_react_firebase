import './ToDo.css';
import React from 'react';
import { ListItem, ListItemText, Button } from '@material-ui/core';
import { db } from './firebase_config';

export default function TodoListItem({ toDoValue , inprogress , id }) {

    const toggleInProgress = () => {
        db.collection("todos").doc(id).update({
            inprogress : !inprogress,
        })
    }

    const deleteToDo = () => {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div className="list_container">
            <ListItem>
                <ListItemText 
                    primary={toDoValue} 
                    secondary={inprogress ? "In Progress =((" : "Completed =))"}
                />
            </ListItem>
            <Button className="InProgressBtn" onClick={toggleInProgress}>
                {inprogress ? "Done :>" : "UnDone :<"}
            </Button>
            <Button className="DeleteBtn" onClick={deleteToDo}>X</Button>
        </div>
    )
}
