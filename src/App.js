import React, {useState} from 'react';
import data from "./data";
import "./App.css"
import Menu from "./Components/Menu";

function App() {

    const menuData = data

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <div className="section-center">
                    {
                        menuData.map(item => (
                            <Menu key={item.id} {...item}/>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}

export default App;
