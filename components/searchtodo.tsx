"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function SearchTodo()
{
    const search = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();
    function searchTodo(query:string)
    {
        const urlParams = new URLSearchParams(search);
        if(query){
            urlParams.set('query',query);
        }                 
        else{
            urlParams.delete('query'); //remove the search params
        }
        replace(`${pathName}?${urlParams.toString()}`);
    }
    return (
        <div className="flex h-2/4 my-4">
            <input type="search" placeholder="search todos..." onChange={(e)=>searchTodo(e.target.value)} 
            className="text-black min-w-full h-8 px-2 bg-white  border border-slate-300 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
        </div>
    )
}