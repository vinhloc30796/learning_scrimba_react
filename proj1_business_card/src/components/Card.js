import React from "react"

export default function Card({children}) {
    return <div className="inline-block flex flex-col min-w-[330px] max-w-lg mx-auto my-6 rounded-lg bg-slate-700">
        <img src="./assets/14.jpg" className="rounded-t-lg" />
        {children}
    </div>
}