"use server"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GetTodos(query?: string, pageNum?: number) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies().get("token")?.value}`
    }
    let url = "http://localhost:5235/todo/gettodos";

    if (query !== undefined) //if the user searches for todo or there is a query string present in the url
    {
        url = url.concat(`?query=${query}`);
    }
    if (pageNum != undefined) {
        url = url.concat(url.indexOf("?") === -1 ? `?pageNum=${pageNum}` : `&pageNum=${pageNum}`);
    }
    var res = await fetch(url, { method: "GET", cache: "no-cache", headers: headers });
    if (!res.ok) return null;
    var result = await res.json();
    return result;

}

export async function DeleteTodo(id: number) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies().get("token")?.value}`
    }
    let url = `http://localhost:5235/todo/deletetodo/${id}`;
    var res = await fetch(url, { method: "DELETE", cache: "no-cache", headers: headers });
    if (!res.ok) return null;
    revalidatePath('/')
    // var result = await res.json();
    // return result;
}

export async function UpdateCompleteTodo(id: number, isComplete: boolean) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookies().get("token")?.value}`
    }
    const body =
    {
        "IsComplete": isComplete
    }
    let url = `http://localhost:5235/todo/completetodo/${id}`;
    var res = await fetch(url, { method: "PUT", cache: "no-cache", body: JSON.stringify(body), headers: headers });
    if (!res.ok) return null;
    revalidatePath('/')
    // var result = await res.json();
    // return result;
}