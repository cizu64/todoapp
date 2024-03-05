"use client"
import Link from "next/link";
import Header from "./header";
import {AddTodo} from "@/app/createtodo/actions";
import { useFormState } from 'react-dom'
import Error from "./errordiv";
import { SubmitTodoButton } from "./submitTodoButton";


const initialState = {
  detail: '' as string,
  statusCode:null as any
}
export default function CreateTodo() {
  const [state, formAction] = useFormState(AddTodo, initialState)
  return (
    <>
    <Header text="Create Todo"/>
    <div className="py-8 px-8 max-w-sm max-h-auto my-10 mt-2 mx-auto bg-white rounded-xl shadow-lg space-y-2">
      <form action={formAction}>
  
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Title</span>
          <input type="text" name="title" className="peer block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="title" required/>
          <small className="mt-2 invisible peer-invalid:visible text-red-600 text-xs">
            Please enter the title.
          </small>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Description</span>
          <textarea rows={4} cols={4} name="description" className="peer block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter some text..." required/>
          <small className="mt-2 invisible peer-invalid:visible text-red-600 text-xs">
            Please enter the description.
          </small>
        </label>

        <div className="my-5"> 
        <SubmitTodoButton/>
        </div>

      </form>
    </div>
      {state?.statusCode!=200 && <Error text={state?.detail}/> }
    </>
  );
}
