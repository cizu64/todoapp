"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState } from "react";

export default function Paginate({ totalPages }: { totalPages: any }) {

    const pathName = usePathname();
    const { replace } = useRouter();

    let pageNum = 0;
    function Next() {
        pageNum = totalPages == pageNum ? pageNum : pageNum + 1;
        replace(`${pathName}?pageNum=${pageNum.toString()}`)
    }
    function Prev() {
        pageNum = pageNum == 0 ? pageNum : pageNum - 1;
        replace(`${pathName}?pageNum=${pageNum.toString()}`)
    }

    return (
        <div className="max-w-sm mx-auto my-5 rounded-full bg-sky px-2 py-0.5 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10 text-center">
            <button onClick={Prev}
                className="rounded-sm mr-4 p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white w-1/4">Prev</button>

            <button onClick={Next}
                className="rounded-sm mr-4 p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white w-1/4">Next</button>
        </div>
    )
}





// let arrPages = [];
// for (var i = 0; i < totalPages + 1; i++) {
//     arrPages.push(i)
// }

// return (
//     arrPages.map((page) =>
//         <button onClick={()=>Next(page)} className="mt-4 rounded-sm mr-4 p-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white w-1/4">
//             {page}
//         </button>
//     )
// )