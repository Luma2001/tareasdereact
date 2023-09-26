import React from 'react'

const Tasks = ({title, completed}) => {
  return (
    <div>
        <p>
            <span>{title} </span>
            <span>{completed ? "completed" : "to Do"}</span>
        </p>
    </div>
  )
}

export default Tasks