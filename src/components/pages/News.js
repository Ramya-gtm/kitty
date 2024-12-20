import React, { useState } from "react";
import NewsList from "./NewsList";

function News(){

    const [category,setCategory] = useState("")
    const categories = ['general','technology','sports','health','science','business']

    return (
        <div>
            <h1>News App</h1>
            <nav>
                {categories.map((cat) => (
                 <button key={cat} 
                 onClick={() => setCategory(cat)}
                 style={{
                    margin:"5px",
                    padding:"7px",
                    backgroundColor: category === cat ?"blue":"darkgray",
                    color: category === cat ? "white":"black",
                    borderRadius:"5px",
                    cursor:"pointer"
                 }}>
                    {cat.toUpperCase()}
                 </button>
       ))}
            </nav>
            <NewsList category={category}/>
        </div>
    )
}

export default News