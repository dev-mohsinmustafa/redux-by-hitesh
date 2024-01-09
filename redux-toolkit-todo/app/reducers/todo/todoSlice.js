import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid ye redux me hota hai jo unique id generate krta hai 



// isme sb se pehle initialstate hoge kuch be object array apki marzi hai

// mene {} kyo ke is me multiple chezen askty hain 
// jese me ne todos rkh deya yani todos ke name se mere state hai 
// is ke array ha or usme object honge to me 1 khud se object rkh deta hun take easy ho 
// id text value ap chaho kuch be dal skty ho value completed false wegara   
let initialState = {

    todos: [{ id: 1, text: "Hello world" }]
}

// ab yeha mera 1 todo es me or be property ho skty hai hoskta ap authentication 
// token rkhna chahty hain or be kuch complex hoskta jo agy jake hm rkhenge  




// how to make slice
// slice almost reducer ka he 1 bara version hai or kuch ne reducer kya hai kuch ne bs
// functionality hai 
// to ham kya krty hai esko export kr lete kyo isko agy use krna hai



// function sayHello() {
//     console.log("Hello world");
// }


// slice kese bane ga to 1 he to method hai createSlice ke name se

// is method me {} he ayen ge
export const todoSlice = createSlice({
    // ab kya hai slices ke name hoty hai 
    // ap per depend krta hai ke kya name ap rkhna chahty hain 
    // but jo be ap name rkhenge soch kr rkhenge ge kyo ke bad me toolkit use krnege to wo chrome me show hoga
    // or kuch important ne hai

    // to mene 1 name property de
    // ye property me kud se ne rkh raha balqe ye redux me hai yehe name hota hai property ko rkhene ka
    // string hai todo 

    name: "todo",
    
    // 2nd property har slice ka 1 initialstate hota hai

    initialState,


    // ab jo sab se important chez ati hai jis ke leye jis ke leye hamara store abi
    // tk incomplete hai wo hai hamary reducers 

    // important baat reducers me ata kya hai 
    // to isme ati hai properties or functions  
    // to mere property ka name hai addTodo
    // ab is property ke ander apko apna 1 function likhna hota hai
    // ab function ye be hoskta hai apne kahi or be likha ho ap is file ke uper be bana skty hai 
    // ab me sayHello ko yaha reference de skta hun 
    // yaha direct be likh skty hai ()=>{}
    reducers: {
        // addTodo: sayHello,

        addTodo: (state, action) => {
            // yaha hmesha 2 chezen milenge 1 state or 1 action
            // in dono ka apke pass hmesha he access rhega 
            // ab dono ko kam me kese lena hai wo dekhe
            // state to apko kya hai variable jo hmesha access dega ke abhi mere current state
            // ke ander kya kya values hain unka access apko btaye ge

            // action hoskta hai apke pass kuch values ayen 
            // ab jese removeTodo hai to ye apne ap to remove ne hoskta iski value ayege 
            // id hogi koi to wo action se milege 
            // 1 new  todo bna lete hain
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            // ab is state ko update krna hai 
            state.todos.push(todo)
        },
        removeTodo: (state,action) => { 
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload)
        },
        updateTodo : (state,action) => {
            
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.text = newText;
            }
        }

    }
})




// ab hm jis functionality se reducers yani state ko update kr rhy thy unko export kren
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions






// ab ye store me bhejne hai
export default todoSlice.reducer