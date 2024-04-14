"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function AddTodo(prevState:any, formData:FormData)
{
    const headers = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${cookies().get("token")?.value}`
    }

    const body = {
        "title":formData.get("title"),
        "description":formData.get("description")
    }

    let url = "http://localhost:5235/Todo/CreateTodo";
    var res = await fetch(url,{method:"POST", cache:"no-cache", headers:headers, body:JSON.stringify(body)});
    if(!res.ok)
    {
        var result = await res.json();
        return result;
    }
    redirect('/'); //redirect to todo page
}