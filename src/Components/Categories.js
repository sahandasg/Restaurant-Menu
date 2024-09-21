import React, {useState} from 'react';

function Categories({categories, changeCategory}) {

    const [clickedCategory, setClickedCategory] = useState("all");
    const clickHandler = (e) => {
        changeCategory(e.target.innerHTML);
        setClickedCategory(e.target.innerHTML);
    }
    return (
        <div className="btn-container">
            {categories.map(category => (
                <button
                    onClick={clickHandler}
                    key={Math.random()}
                    type="button"
                    className={category === clickedCategory ? "filter-btn highlight" : "filter-btn"}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Categories;