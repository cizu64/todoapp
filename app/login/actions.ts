"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Authenticate(prevState:any,formData:FormData)
{
    const body = 
    {
        "email":formData.get("email"),
        "password":formData.get("password")
    };
    const headers = {
        "Content-Type":"application/json"
    }
    var res = await fetch("http://localhost:5235/User/Login",{method:"POST",cache:"no-cache", body:JSON.stringify(body), headers:headers});
    if(!res.ok) 
    {
        cookies().delete("token");
        var result = await res.json();
        return result;
    }
    var result = await res.json();
    //add token to http-only cookie and redirect to todo page
    cookies().set("token", result.detail,{httpOnly:true});
    redirect('/')
    //redirect to todo page
}

export async function IsAuthenticated(token:string) : Promise<boolean>
{
    const headers = {
        "Content-Type":"application/json"
    }
    var res = await fetch(`http://localhost:5235/User/ValidateToken/${token}`,{method:"GET",cache:"no-cache", headers:headers});
    var result = res.ok && token!='' && token!=undefined;
    return result;
}