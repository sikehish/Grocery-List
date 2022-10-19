import React, { useEffect } from 'react'

const Alert = ({alert, setAlert}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert('')
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {((alert=='Item added' || alert=='Item edited') && <p className='alert alert-success'>{alert}</p>) 
      || <p className='alert alert-danger'>{alert}</p>}
    </>
  )
}

export default Alert
