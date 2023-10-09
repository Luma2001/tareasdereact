import React, {useState} from 'react'
import Tasks from './Tasks/Tasks';
import Header from './header/Header';
import { Form } from './Form/Form';
import TasksList from './Tasks/TasksList';


//USO DE MOCK:Creo un objeto de prueba del array que necesito

/*
const MOCK_TASK=[
{
    id: 1,
    title: "Tarea 1",
    completed: true,
},
{
    id: 2,
    title: "Tarea 2",
    completed: false,
},
{
    id: 3,
    title: "Tarea 3",
    completed: false,
},
]
*/


const ToDoList = () => { 

//TAREAS: Creo mi useState para controlar lo que ingresa el usuario
    const [tasks,setTasks]=useState([]);//Cuando estoy probando lo inicializo con mi MOCK de prueba: useState(MOCK_TASK)
    console.log(tasks);

    //Creo una función para agregar una nueva tarea
    const createTask =(title)=>({
        id: window.crypto.randomUUID(),//para autogenerar un id
        title: title,
        completed: false,
    })

    //Creo la función que voy a pasar como callback al componente Form para evitar que modifique el setTasks
    const addTask =(form)=>{//una forma de resolver la problematica con el setTasks
        const newTask = createTask(form.title);
        console.log(newTask);
        setTasks([...tasks, newTask]);
        console.log(tasks);
    }

    //creo una funcion para colocar como completada una tarea
    const completeTask = (id)=>{
        //usando draft para no mutar tasks
        const draft = structuredClone(tasks);
        const task = draft.find((task)=>task.id===id);
        task.completed = !task.completed;
        setTasks(draft);//ahora modifico estado correctamente porque mute un clon y actualizo estado con setTask
        //console.log(id);
    };

    //creo una funcion para borrar una tarea
    const deleteTask = (id)=>{
        const newTasks=tasks.filter((task)=>task.id!==id);
        setTasks(newTasks); //Aparecen todas las tareas que tengan un id distinto al id pasado
    }

        
        
//MAQUETACION DEL VIEW
  return (
    <div>
            <section id='header'>
                <Header /*nuevo componente para el titulo, usando children*/> 
                <h1>Lista de Tareas</h1>
                </Header>
            </section>
            
            <section id='formEnter'>
                <Form 
                    onsubmitted={(form)=>{
                        addTask(form);
                    }}
                />
            </section>

        <TasksList
            tasks ={tasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
        />
    </div>
  );
};

export default ToDoList