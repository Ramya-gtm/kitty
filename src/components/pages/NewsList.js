import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';

function NewsList({category}) {
    const [articles,setArticles]= useState([]);
    const [loading,setLoading]=useState(true);
    const API_KEY='c406f33e77dd4d8abed69591b2fe328a';
    useEffect(() => {
      const fetchNews = async () =>{
        setLoading(true);
        try{
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${API_KEY}`
            )
            setArticles(response.data.articles);
        }catch(error){
            console.log(error);
        }
        setLoading(false);
      }
      fetchNews();
    },[category])
    if (loading) return <p>loading...</p>
    if (articles.length === 0) return <p>No articles available for this category</p>
  return (
    <div style={{marginTop:"20px"}}>
        {
            articles.map((article) => <NewsItem key={article.id} article={article} />)
        }

    </div>
  )
}

export default NewsList