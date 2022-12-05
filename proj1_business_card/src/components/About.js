import React from "react"

export default function About() {
    return <div className="flex flex-col">
        <h2 className="text-white text-3xl font-bold mt-3">About</h2>
        <p className="text-slate-300 mt-2">
            I'm a marketer turned data & web engineer with a strong interest in financial equality. My international experiences have exposed me to both high-level thinking and low-level operational excellence. Rough timeline:
        </p>
        <ul className="list-disc list-inside text-slate-300">
            <li>
                <span className="font-bold">Curr:</span>
                <ul className="ml-3 list-disc list-inside text-slate-300">
                    <li>Sr Data Engineer (Protocol Labs)</li> 
                    <li>Nanyang Technological University (MSc Fintech - May '23)</li>
                </ul>
            </li>
            <li>
                <span className="font-bold">Short-term: </span>DeFi Engineer
            </li>
            <li>
            <span className="font-bold">Long-term: </span>APAC Web3 Pro-sumer Startup
            </li>
        </ul>
    </div>
}