"use server"

import { Authenticate } from "../login/actions";

export async function SignUp(prevState:any, formData:FormData)
{
    const body = 
    {
        "email":formData.get("email"),
        "firstname":formData.get("firstname"),
        "lastname":formData.get("lastname"),
        "password":formData.get("password")
    };
    const headers = {
        "Content-Type":"application/json"
    }
    var res = await fetch("http://localhost:5235/User/CreateUser",{method:"POST",cache:"no-cache", body:JSON.stringify(body), headers:headers});
    if(!res.ok) 
    {
        var result = await res.json();
        return result;
    }
    var result = await res.json();
    //call login server action
    await Authenticate(null, formData); //it will call the pramaters it needs
}