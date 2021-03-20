import React, { createContext,useContext,useReducer, useEffect } from 'react';
import BookReducer from './reducer/BookReducer'

const contextApp = createContext();
 export const ContextProvider = ({children})=>{
    const [Books, dispatch] = useReducer(BookReducer,[],()=>{
       const localData = localStorage.getItem("books");
       return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
       localStorage.setItem("books",JSON.stringify(Books));
    }, [Books])
  return (<contextApp.Provider value={{ Books,dispatch}}>
     {children}
  </contextApp.Provider>);
}

export const useProductsContext = () =>{
    return useContext(contextApp)
}
