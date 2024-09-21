import React, {useState} from 'react';
import data from "./data";
import "./App.css"
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";

const allCategories = ["all", ...new Set(data.map(data => data.category))];

function App() {
    const [menu, setMenu] = useState(data);
    const [categories, setCategories] = useState(allCategories);
    const [chosenCategory, setChosenCategory] = useState(data);

    const categoryHandler = (category) => {
        if (category === "all") {
            setChosenCategory(data)
        } else {
            setChosenCategory(menu.filter(item => item.category === category))
        }
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} changeCategory={categoryHandler}/>
                <div className="section-center">
                    {
                        chosenCategory.map(item => (
                            <Menu key={item.id} {...item}/>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}

export default App;
