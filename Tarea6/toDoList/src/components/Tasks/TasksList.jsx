import React from 'react'
import Tasks from './Tasks';

const TasksList = ({tasks,completeTask,deleteTask}) => {
  
    return (
    <section id='taskList'>
                {tasks.map((task) => {
                    return(
                        <Tasks 
                            key={task.id}
                            title= {task.title}
                            completed= {task.completed}
                            onCompleted={()=>{completeTask(task.id);}}
                            onDeleted={()=>{deleteTask(task.id);}}
                        />
                        
                        /* Coloco todo esto en un nuevo componente llamado Tasks.jsx y lo importo
                        <div key={task.id}>
                            <p>
                                <span>{task.title} </span>
                                <span>{task.completed ? "completed" : "to Do"}</span>
                            </p>
                        </div>
                        */
                    );
                    })
                }
            </section>
  )
}

export default TasksList