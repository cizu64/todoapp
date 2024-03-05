"use client"
import Link from "next/link";
import Header from "./header";
import { SignUp } from "@/app/signup/actions";
import {SubmitSignupButton} from "@/components/submitSignupButton";
import { useFormState } from 'react-dom'
import Error from "./errordiv";
const initialState = {
  detail: '' as string,
  statusCode:null as any
}
export default function Signup() {
  const [state, formAction] = useFormState(SignUp, initialState)
  return (
    <>
    <Header text="Create an Account"/>
    <div className="py-8 px-8 max-w-sm max-h-auto my-10 mt-2 mx-auto bg-white rounded-xl shadow-lg space-y-2">
      <form action={formAction}>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Email</span>
          <input type="email" name="email" className="peer block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="email@email.com" required/>
          <small className="mt-2 invisible peer-invalid:visible text-red-600 text-xs">
            Please provide a valid email address.
          </small>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Firstname</span>
          <input type="text" name="firstname" className="peer block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="firstname" required/>
          <small className="mt-2 invisible peer-invalid:visible text-red-600 text-xs">
            Please provide your firstname.
          </small>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Lastname</span>
          <input type="text" name="lastname" className="peer block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="lastname" required/>
          <small className="mt-2 invisible peer-invalid:visible text-red-600 text-xs">
            Please provide your lastname.
          </small>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Password</span>
          <input type="password" name="password" className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="password" required/>       
        </label>

        <div className="my-5">
      
        <SubmitSignupButton/>

        <Link href={"/login"} className="text-center space-y-2">Login</Link>
        </div>

      </form>
    </div>
      {state.statusCode!=200 && <Error text={state.detail}/> }
    </>
  );
}
