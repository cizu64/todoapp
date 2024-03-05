"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchTodo()
{
    const search = useSearchParams(); //get the search params object
    const pathName = usePathname(); //get the current path for the route
    const {replace} = useRouter()
    function searchTodo(query:string)
    {
        const urlParams = new URLSearchParams(search);
        if(query){ //if a search is made
            urlParams.set('query',query); //set the query search param to the search value
        }
        else{
            urlParams.delete('query') //remove the search param   
        }
        //update the page url with usePathName and Router
        replace(`${pathName}?${urlParams.toString()}`);
    }
    return (
        <div className="flex h-2/4 my-4">
            <input type="search" placeholder="search todos..." className="min-w-full h-8 px-2 bg-white  border border-slate-300 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" onChange={(e)=>searchTodo(e.target.value)} defaultValue={search.get('query')?.toString()}/>
        </div>
    )
}