import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './News.css'

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/news'
        )
        setNews(response.data.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error)
        setError('Failed to load news')
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return <div className="news-container">Loading...</div>
  }

  if (error) {
    return <div className="news-container">{error}</div>
  }

  return (
    <div className="news-container">
      <h1>Crypto News</h1>
      <div className="news-list">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
            <div className="news-image">
                <img src={item.thumb_2x} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
            </a>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
