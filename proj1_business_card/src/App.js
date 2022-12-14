import React from "react"

// Components
import Card from "./components/Card"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"


export default function App() {
    return <div className="bg-black float my-[0px] py-px">
        <Card>
            <Info />
            <div className="mx-6 mt-6">
                <About />
                <Interests />
            </div>
            <Footer />
        </Card>
    </div>
}