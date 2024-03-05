import Paginate from "@/components/pagination";
import SearchTodo from "@/components/searchtodo";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { cookies } from "next/headers";
import Image from "next/image";
import { GetTodos, DeleteTodo } from "./action";
import RemoveTodo from "@/components/deletetodo";
import CompleteTodo from "@/components/completetodo";
import Link from "next/link";


//searchParams is a spacial prop that can be use to ssearch querying string in a route
export default async function Todo({ searchParams }: { searchParams?: { query?: any, pageNum?:number} }) {
   const todos = await GetTodos(searchParams?.query, searchParams?.pageNum);
   
    return (
    <div className="my-20 max-w-md mx-auto">
      <div className="flex">
        <h2 className="text-white text-center p-5 text-2xl w-4/5">My Todos</h2>
        <Link className="text-white" href={"/createtodo"}>
          <PencilSquareIcon className="hover:text-violet-500 h-10" title="Add Todo"/>
          </Link>
      </div>
      <SearchTodo />
      <ul role="list" className="divide-y divide-slate-200 bg-white ">
        {todos.detail.map((todo:any) =>
          <li key={todo.id} className="flex py-4 first:pt-5 last:pb-5 hover:bg-slate-400">
            <div className="ml-3 w-2/4 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">{todo.title}</p>
              <p className="text-sm text-slate-700 truncate">{todo.description}</p>
            </div>
            <div className="flex-column ml-3 overflow-hidden">
            <small className="text-xs">Done?</small>
            <CompleteTodo id={todo.id} isComplete={todo.isComplete}/>
            </div>
            <div className="ml-3 overflow-hidden">
             <small className="text-slate-900">{todo.dateCreated}</small>
            </div>
            <RemoveTodo id={todo.id}/>
          </li>
        )}
      </ul>
      <Paginate totalPages={todos.meta.totalPages}/>
    </div>
  );
}
