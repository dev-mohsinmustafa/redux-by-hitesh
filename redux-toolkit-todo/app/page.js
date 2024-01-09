
'use client'


import AddTodo from "./(components)/addTodo";
import Todos from "./(components)/todos";
// import { Provider } from "react-redux";
// import { store } from "./store/store";

import { StoreProvider } from "./store/storeProvider";
export default function Home() {
  return (

    // <Provider store={store}>
    <StoreProvider>
      <>
        {/* <h1 style={{color:"white", textAlign:"center", fontSize:60}}>Learn about redux toolkot</h1> */}
        <h1 style={{color:"white", textAlign:"center", fontSize:60}}>TODO App with Redux</h1>
        <AddTodo />
        <Todos />
      </>
    </StoreProvider>
    // </Provider>
  )
}
