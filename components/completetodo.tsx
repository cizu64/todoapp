
import { UpdateCompletedTodo } from "@/app/action"

export default function CompleteTodo({todoId, isComplete}:{todoId:number, isComplete:boolean})
{
    return (
        <p className="text-sm font-medium text-slate-900">
            <input type="checkbox" title="is completed?" defaultChecked={isComplete} onChange={async()=>{
                await UpdateCompletedTodo(todoId, !isComplete)
            }}></input>
        </p>
    )
}