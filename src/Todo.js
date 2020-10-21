import { List, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import { ListItem, Button } from '@material-ui/core';
import db from './firebase.js';

function todo(props) {

    return (
        <List className="list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="deadline"> </ListItemText>
            </ListItem>
             <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button> 
        </List>
    )
}

export default todo;
