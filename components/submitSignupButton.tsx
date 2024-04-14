"use client"
import { useFormStatus } from 'react-dom'
export function SubmitSignupButton()
{
    const { pending } = useFormStatus()
<<<<<<< HEAD

    return (
    <button disabled={pending} className="rounded-full mr-4 p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
          Sign up
=======
    return (
    <button disabled={pending} className="rounded-full mr-4 p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
          Sign Up
>>>>>>> 0003d40 (edit todo)
    </button>
    )
}