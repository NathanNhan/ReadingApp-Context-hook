import React from 'react';
import {useProductsContext} from '../context';
const Navbar = ()=>{
  const {Books} = useProductsContext()
  
  return (
    <div className='navbar'>
      <h1>reading list app</h1>
      <p>currently you have {Books.length} founded</p>
    </div>
  )
}
export default Navbar;