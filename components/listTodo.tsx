"use client"

import { useRef, useState } from "react"
import CompleteTodo from "./completetodo"
import RemoveTodo from "./deletetodo"
import Link from "next/link"
import { EditTodo } from "@/app/action"

export default function ListTodo({todos}:{todos:any})
{
   // const[isEditing, setEditing] = useState(false)
    const[editId,setEditId] = useState(0);
    const title = useRef('');
    const description = useRef('');
    return (
        <ul role="list" className="divide-y divide-slate-200 bg-white ">
        {todos.detail.map((todo: any) =>
            <li key={todo.id} className="flex py-4 first:pt-5 last:pb-5 hover:bg-slate-400">

              <div className="ml-3 w-2/4 overflow-hidden">
              {todo.id != editId? 
              <p className="text-sm font-medium text-slate-900">{todo.title}</p> : 
              <input type="text" className="my-1 p-1 w-auto" defaultValue={todo.title} ref={title}/> }
              {todo.id != editId?
               <p className="text-sm text-slate-700 truncate">{todo.description}</p>:
               <textarea rows={4} className="my-1 p-1 w-auto" defaultValue={todo.description} ref={description}/>}
              </div>                 

               <div className="flex-column ml-3 overflow-hidden">
                <small className="text-xs">Done?</small>
                <CompleteTodo todoId={todo.id} isComplete={todo.isComplete} />
              </div>
              <div className="flex-column ml-3 overflow-hidden">
                <small className="text-slate-900">{todo.dateCreated}</small>
                <div>
                {todo.id!=editId?<Link className="text-sm text-blue-600 hover:text-blue-900" href={""} onClick={(e)=>{
                    e.preventDefault();
                    //setEditing(!isEditing)
                    setEditId(todo.id)
                }}>Edit</Link>:<Link className="text-sm text-blue-600 hover:text-blue-900" href={""} onClick={async(e)=>{
                    e.preventDefault();
                    //setEditing(!isEditing)
                    //saveEdited(todo.id, todo.title,todo.description,todo.isComplete)
                     await EditTodo(todo.id, title.current.value||todo.title,description.current.value||todo.description,todo.isComplete)
                     setEditId(0)
                }}>Save</Link>}
                </div>
              </div>
             <RemoveTodo id={todo.id} />  
            </li>
        )}
      </ul>
    )
}