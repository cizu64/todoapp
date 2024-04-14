"use client"
import { useFormStatus } from 'react-dom'
export function SubmitTodoButton()
{
    const { pending } = useFormStatus()
    return (
    <button disabled={pending} className="rounded-full mr-4 p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
          Create Todo
    </button>
    )
}