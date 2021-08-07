
import React, { createContext,useContext, useState } from 'react'







const movies = createContext();




const Context = ({children}) => {
const [more, setMore] = useState(1);




const Increment = () => {
  setMore(more + 1);
}


const Decrement = () => {
    if (more < 1) {
        return more + 1
    } else {
        setMore(more - 1)
    }
 
}





    return (
        
        <movies.Provider value = {more,Increment,Decrement} >
            {children}
        </movies.Provider>
    )
}

export default Context

export const UseMovie = () => {
    return useContext(movies);
}
