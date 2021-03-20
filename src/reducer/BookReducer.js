import { v4 as uuid } from 'uuid'

 const BookReducer = (state,action)=>{
     switch (action.type) {
         case 'ADD_BOOK':
             return [...state,{title:action.payload.title,author:action.payload.author,id:uuid()}];
         case 'REMOVE':
             return state.filter((book)=>book.id !== action.payload);
         default:
             return state
     }
    
}

export default BookReducer;