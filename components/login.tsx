"use client"
import Link from "next/link";
import Header from "./header";
import { Authenticate } from "@/app/login/actions";
import {SubmitLoginButton} from "@/components/submitLoginButton";
import { useFormState } from 'react-dom'
import Error from "./errordiv";
const initialState = {
  detail: '' as string,
  statusCode:null as any
}
export default function Login() {
  const [state, formAction] = useFormState(Authenticate, initialState)
  return (
    <>
    <Header text="Login"/>
    <div className="py-8 px-8 max-w-sm max-h-64 my-10 mt-2 mx-auto bg-white rounded-xl shadow-lg space-y-2">
      <form action={formAction}>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Email</span>
          <input type="email" name="email" className="peer block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="email@email.com" required/>
          <small className="mt-2 invisible peer-invalid:visible text-red-600 text-xs">
            Please provide a valid email address.
          </small>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Password</span>
          <input type="password" name="password" className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="password" required/>       
        </label>

        <div className="my-5">
      
        {/* <button className="rounded-full mr-4 p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
          Login
        </button> */}
        <SubmitLoginButton/>

        <Link href={"/signup"} className="text-center space-y-2">Sign up</Link>

     
        </div>

      </form>
    </div>
      
      {state.statusCode!=200 && <Error text={state.detail}/> }
    </>
  );
}
