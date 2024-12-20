import React from "react";

function NewsItem({article}){
    return (
        <div 
        style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding:"25px",
            margin:"10px",
            maxWidth:"600px",
            marginLeft:"auto",
            marginRight:"auto",
        }}>
            <a href={article.url} target="_blank" rel="noreferrer">
           <h3>{article.title}</h3>
           <p><strong>Source:</strong>{article.source.name}</p>
           <img src={article.urlToImage} alt={article.title} style={{width: "100%", borderRadius:"10px"}} />
           </a>
        </div>
    )
}

export default NewsItem
