import React from 'react'
import {useProductsContext} from '../context';
export default function BookDetail({title,author,id}) {
    const {dispatch} = useProductsContext()
    return (
        <li onClick={()=>dispatch({type:'REMOVE',payload:id})}>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
        </li>
    )
}
