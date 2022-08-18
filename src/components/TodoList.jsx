import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';


export default function TodoList() {
    const [todos, setTodos] = useState([{id: 1, text: "todo"}]);
    return (
        <header>
            <h1>Task List 2022</h1>
            <TodoHeader />
        <br />
        <hr />
        <br />
        <br />
        <TodoBody />
        </header>
        
          
    )
}