import React from "react"
import { IconMail, IconBrandLinkedin  } from '@tabler/icons';

export default function Info() {
    return <div className="flex flex-col mx-6 mt-6">
        <h1 className="text-white text-5xl font-extrabold mx-auto mt-3">
            Loc Nguyen
        </h1>
        <h2 className="text-white text-4xl mx-auto mt-3">
            Data & Web Engineer
        </h2>
        <a href="https://github.com/vinhloc30796" className="text-cyan-500 mx-auto mt-3">
            github.com/vinhloc30796
        </a>
        <div className="grid grid-cols-2 gap-4 place-content-center mt-3">
            <a 
                className="flex justify-center rounded-lg bg-white px-auto py-3 text-black text-xl"
                href="mailto:mailto:vinhloc30796@gmail.com"
            >
                    
                <IconMail size={28} className="mr-3"/> 
                Email
            </a>
            <a 
                className="flex justify-center rounded-lg bg-blue-600 px-auto py-3 text-white text-xl"
                href="https://www.linkedin.com/in/vinhloc30796/"
            >
                <IconBrandLinkedin size={30} className="mr-3"/> 
                LinkedIn
            </a>
        </div>
    </div>
}