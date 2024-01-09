
import { useSelector, useDispatch } from "react-redux";

import { removeTodo, updateTodo } from "../reducers/todo/todoSlice";


import { useState } from 'react'; // Import useState for handling input changes



function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


    // Add state to handle the new text input
    const [newText, setNewText] = useState('');

    return (
        <>
            {/* <div>Todos</div> */}

            <ul className="list-none">
                {
                    todos.map((todo) => {
                        return (
                            <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                                key={todo.id}>
                                <div className="text-white">
                                    {todo.text}
                                </div>
                                <button onClick={() => dispatch(removeTodo(todo.id))}
                                    className="text-white bg-red-500 border-0 py-1 px-4 
                                    focus:outline-none hover:bg-red-600 rounded text-xl">
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {/* X */}
                                </button>
                                {/* 
                                <button
                                    onClick={() =>
                                        dispatch(updateTodo(todo.id))

                                    }
                                    className="text-white bg-red-500 border-0 py-1 px-4 
                                    focus:outline-none hover:bg-red-600 rounded text-xl">
                                    <svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" id="update" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                                        <path id="primary" d="M19,2a1,1,0,0,0-1,1V5.33A9,9,0,0,0,3,12a1,1,0,0,0,2,0A7,7,0,0,1,16.86,7H14a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V3A1,1,0,0,0,19,2Z"
                                            style={{ fill: "rgb(0, 0, 0)" }}></path>
                                        <path id="secondary" d="M20,11a1,1,0,0,0-1,1A7,7,0,0,1,7.11,17H10a1,1,0,0,0,0-2H5a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V18.67A9,9,0,0,0,21,12,1,1,0,0,0,20,11Z"
                                            style={{ fill: "rgb(44, 169, 188)" }}></path></svg>
                                </button> */}


                                {/* Add an input field and button for updating */}
                                {/* <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="New text"
                                        value={newText}
                                        onChange={(e) => setNewText(e.target.value)} // Update the newText state
                                        className="rounded-l-lg p-1 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                                    />
                                    <button
                                        onClick={() => dispatch(updateTodo({ id: todo.id, newText: newText }))}
                                        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded-r-lg text-xl"
                                    >
                                        Update
                                    </button>
                                </div> */}

                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default Todos;