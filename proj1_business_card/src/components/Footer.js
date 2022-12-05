import React from "react"
import { IconBrandTwitter, IconBrandFacebook, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

export default function Footer() {
    return <div className="inline-block flex flex-row bg-[161619] place-content-center rounded-b-lg">
        <a href="https://twitter.com/vl307">
            <IconBrandTwitter size={60} stroke={2.5} className="mr-4 my-6 text-slate-300 fill-sky-600"/> 
        </a>
        <a href="https://facebook.com/vl307">
            <IconBrandFacebook size={60} stroke={2.5} className="mr-4 my-6 text-slate-300 fill-blue-500"/> 
        </a>
        <a href="https://github.com/vinhloc30796">
            <IconBrandGithub size={60} stroke={2.5} className="mr-4 my-6 text-slate-300 fill-purple-700"/> 
        </a>
        <a href="https://linkedin.com/in/vinhloc30796">
            <IconBrandLinkedin size={60} stroke={2.5} className="mr-4 my-6 text-slate-300 fill-cyan-700"/> 
        </a>
        {/* <img src="./assets/brand-facebook.png"/>
        <img src="./assets/brand-twitter.png"/>
        <img src="./assets/brand-github.png"/>
        <img src="./assets/brand-linkedin.png"/> */}
    </div>
}