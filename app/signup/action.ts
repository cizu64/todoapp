"use server"

import { Authenticate } from "../login/action";

const headers = {
    "Content-Type": "application/json"
}

export async function SignUp(prevState:any,formData:FormData)
{
    const body = {
        "email":formData.get("email"),
        "firstname":formData.get("firstname"),
        "lastname":formData.get("lastname"),
        "password":formData.get("password"),
    }

   
   var res = await fetch("http://localhost:5235/User/CreateUser",{method:"POST", cache:"no-cache", body:JSON.stringify(body), headers:headers});
   if(!res.ok){
    var result = await res.json();
    return result;
   }

   var result = await res.json();
   await Authenticate(null,formData) //it will call the parameters it needs
}