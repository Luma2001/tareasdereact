import React from 'react'
import './task.css'
const Tasks = ({title, completed, onCompleted,onDeleted=()=>{}}) => {
  //Creo las funciones
    const handleDelete = () =>{
      onDeleted();
    };

    const handleComplete = () =>{
        onCompleted();
    };

  return (
    <div>
        <p>
            <span>{title} </span>
            <span className='estado'>{completed ? "completed" : "to Do"}</span>
            <button
                    onClick={handleComplete}
                  >✅
            </button>
            <button
                    onClick={handleDelete}
                  >❎
            </button>
        </p>

        
    </div>
  )
}

export default Tasks