import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import data from './dataFile.js'; 


export default function App() {
    const items = data.map((card, index) => {
        return (
            <div key={card.id}>
                <Main card={card} />
                {index < data.length - 1 && <hr />} {/* Render <hr> only if it's not the last item */}
            </div>
        )
    })
    
    return (
        <div>
            <Header />
            <section className="cards-list">
                {items}
                <hr></hr>
            </section>
        </div>
    )
    
    }