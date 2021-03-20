import React from 'react';
import {useProductsContext} from '../context';
import BookDetail from './BookDetail';
const BookList = ()=>{
  const {Books} = useProductsContext();
  if(Books.length < 0){
    return (
      <div className='empty'>No book founded</div>
    )
  }
  return (<div className='book-list'>
    <ul>
      {Books.map((book)=>{
        return <BookDetail key={book.id} {...book}/>
      })}
    </ul>
  </div>);
}
export default BookList;