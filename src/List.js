import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({data, deleteItem,inp, edit, setIndex}) => {

  const onClickEdit = (index) =>{
    inp.current.value= data[index];
    inp.current.focus()
    edit(true);
    setIndex(index)
  }

  return(
    <div className='grocery-list'>
      {data.map((el,index)=>{
        return(
          <article className='grocery-item' key={index}>
          <p className='title'>{index+1}) {el.trim().charAt(0).toUpperCase() + el.slice(1)}</p>
          <div className='btn-container'>
          <button className='edit-btn'><FaEdit onClick={onClickEdit.bind('_', index)}/></button>
          <button className='delete-btn'><FaTrash onClick={deleteItem.bind('_', index)}/></button>
          </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
