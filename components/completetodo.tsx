"use client"
import { UpdateCompleteTodo } from "@/app/action"

export default function CompleteTodo({id,isComplete}:{id:number,isComplete:boolean})
{
    return (
        <p className="text-sm font-medium text-slate-900">
              <input type="checkbox" title="is completed?" defaultChecked={isComplete} onChange={async()=>{
                    await UpdateCompleteTodo(id, !isComplete)
              }}></input>
            </p>
    )
}