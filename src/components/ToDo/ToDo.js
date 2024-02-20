

import React, { useState } from 'react';
import "./todo.css";


export default function ToDo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        
        if (input) {
            setTodos((todos) => todos.concat({ id: Date.now(), text: input, completed: false }));
            setInput('');
        }

    };
    const doneBtn = (id) => {
        setTodos(todos.map((todo) => {

            if (todo.id === id) {
                todo.completed =true
                




            }
            return todo
        }
        ))


    };
    const delBtn = (id) => {
            setTodos((todos) => todos.filter((todo) => todo.id !== id));
          };
    console.log(todos)





    return (
        <>
            <div className='container'>
                <input className='todo-input'
                    type="text"
                    name="input_text"
                    id="todoInput"
                    placeholder='New todos'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button
                    className="todo-submit"
                    type="submit"
                    onClick={handleSubmit}>todo</button>
                <ul>{todos.map((todo) => {
                    return (<li key={todo.id} className='todo'>
                        <input type="checkbox" checked={todo.completed} onClick={() => doneBtn(todo.id)} />
                        <span className='text' style={{ textDecoration: todo.completed ? 'line-through' : "none", }}>{todo.text}</span>


                        <button type="button" className='todo-btn-del'
                            onClick={() => delBtn(todo.id)}
                        >del</button>

                    </li>
                    )

                })}</ul>

            </div>
        </>
    )

}










