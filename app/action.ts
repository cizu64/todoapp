"use server"

import { revalidatePath} from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GetTodos(query?:string, pageNum?:number)
{
    const headers = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${cookies().get("token")?.value}`
    }

    let url = "http://localhost:5235/Todo/GetTodos";
    if(query!==undefined)
    {
        url = url.concat(`?query=${query}`);
    }
    if(pageNum!==undefined)
    {
        url = url.concat(url.indexOf("?")===-1?`?pageNum=${pageNum}` : `&pageNum=${pageNum}`);
    }
    

    var res = await fetch(url,{method:"GET",cache:"no-cache",headers:headers});
    if(!res.ok) return null;
    var result = await res.json();
    return result;
}

export async function UpdateCompletedTodo(todoId:number, isComplete:boolean)
{
    const headers = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${cookies().get("token")?.value}`
    }
    const body = {
        "IsComplete":isComplete
    }
    let url = `http://localhost:5235/Todo/completetodo/${todoId}`;
    var res = await fetch(url,{method:"PUT",cache:"no-cache",headers:headers, body:JSON.stringify(body)});
    if(!res.ok) return null;
    revalidatePath('/')
}

export async function DeleteTodo(todoId:number)
{
    const headers = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${cookies().get("token")?.value}`
    }

    let url = `http://localhost:5235/Todo/deletetodo/${todoId}`;
    var res = await fetch(url,{method:"DELETE",cache:"no-cache",headers:headers});
    if(!res.ok) return null;
    revalidatePath('/')
}

export async function EditTodo(todoId:number, title:string, description:string, isComplete:boolean)
{
    const headers = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${cookies().get("token")?.value}`
    }
    let url = `http://localhost:5235/Todo/edittodo/${todoId}`;

    var body = {
        Title:title,
        Description:description,
        IsComplete: isComplete
    }

    var res = await fetch(url,{method:"PUT",cache:"no-cache",headers:headers, body: JSON.stringify(body)});
    if(!res.ok) return null;
    //revalidatePath('/')
    redirect('/') 
}