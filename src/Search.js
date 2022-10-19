import React, { useRef, useState } from 'react'

function Search({update, inp, isEdit, index, editItem, edit}){

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(isEdit && inp.current.value.trim()){
      editItem(index, inp.current.value.trim())
      edit(false)
      inp.current.value=''
    }
    else{
    if(inp.current.value.trim()) update(inp.current.value.trim())
    inp.current.value=''
  }
  }

  return (
    <form onSubmit={handleSubmit} className='grocery-form'>
      <h3>Grocery List</h3>
      <div className='form-control'>
      <input type="text" className='grocery' placeholder='e.g. eggs' ref={inp} />
      <button type="submit" className='submit-btn'>{isEdit? 'Edit' : 'Submit' }</button>
      </div>
    </form>
  )
}

export default Search