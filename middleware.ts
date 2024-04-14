<<<<<<< HEAD
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { IsAuthenticated } from './app/login/actions';

export async function middleware(request: NextRequest) {
    let cookie = request.cookies.get('token')
    if (cookie == undefined) {
        return NextResponse.redirect(new URL('/login', request.url));  //token is not present, redirect to login page
    }
    var isAuth = await IsAuthenticated(cookie?.value); //if the token is no longer valid, redirect to login page
    if(!isAuth)
    {
        return NextResponse.redirect(new URL('/login', request.url));  //token is not present, redirect to login page
    }

    const response = NextResponse.next();
    return response
    
}
export const config = {
    matcher: ['/', '/createtodo'], //match only the todo page and createtodo
=======
import { NextRequest, NextResponse } from "next/server";
import { IsAuthenticated } from "./app/login/action";

export async function middleware(request:NextRequest)
{
    let cookie = request.cookies.get('token');
    if(cookie == undefined)
    {
        return NextResponse.redirect(new URL('/login', request.url)); 
    }
    var isAuth = await  IsAuthenticated(cookie?.value);
    if(!isAuth)
    {
        return NextResponse.redirect(new URL('/login', request.url)); 
    }

    return NextResponse.next();
}

export const config = {
   matcher: ['/', '/createtodo/:path*']
>>>>>>> 0003d40 (edit todo)
}