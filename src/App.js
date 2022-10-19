import React, { useState, useEffect, useRef } from 'react'
import List from './List'
import Alert from './Alert'
import Search from './Search'

const getLocalStorage = () => {
  let data = localStorage.getItem('data');
  if (data) {
    return (data = JSON.parse(localStorage.getItem('data')));
  } else {
    return [];
  }
};

function App() {

  const [data, setData] = useState(getLocalStorage())
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const [alert, setAlert] = useState('')
  const inp = useRef(null)

  const update=(item)=>
  {
    setData((prev)=>[...prev,item])
    setAlert('Item added')
  }

  const editItem = (index, edited) =>{
    const temp = [...data];
    temp[index]=edited;
    setData(temp)
    setAlert('Item edited')
  }

  const deleteItem=(index)=>{
   const temp = data.filter((el,ind)=>{
        return ind != index
    })     
    setData(temp);
    setAlert('Item Deleted')
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return(
    <section className='section-center'>
      {alert && <Alert alert={alert} setAlert={setAlert} />}
      <Search update={update} inp={inp} isEdit={isEdit} editItem={editItem} index={index} edit={setIsEdit} />
      {data.length>0 && (
        <div className='grocery-container'>
      <List data={data} inp={inp} deleteItem={deleteItem} edit={setIsEdit} setIndex={setIndex}/>
      {data.length>0 && !isEdit && <button className='clear-btn' onClick={()=>{setData([]); setAlert('All items deleted')}}>Clear All</button>}
      </div>
      )}
    </section>
    
  )
}

export default App
