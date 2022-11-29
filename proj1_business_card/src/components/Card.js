import React from "react"

export default function Card({children}) {
    return <div className="flex flex-col min-w-550 w-1/4 mx-auto py-20">
        {children}
    </div>
}