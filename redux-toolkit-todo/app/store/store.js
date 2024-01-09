import { configureStore } from "@reduxjs/toolkit";


import todoReducer from "@/app/reducers/todo/todoSlice";

export const store = configureStore({
    reducer : todoReducer
});



// ab store ban gya hai to 2 step reducers banany hain 
// redux-toolkit me reducers ko slices bolty hain 


// nanoid ye redux me hota hai jo unique id generate krta hai 