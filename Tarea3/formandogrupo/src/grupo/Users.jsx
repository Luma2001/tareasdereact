import React from 'react'

const Users = ({name, age, email}) => {
  return (
    <div>
        <h3>Nombre: {name}</h3>
        <h3>Edad: {age} años</h3>
        <h3>E-mail: {email}</h3>    
    </div>
  )
}

export default Users