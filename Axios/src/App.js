import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [myData, setmyData] = useState([]);
  const [isError, setIsError] = useState('');

  /*//NOTE : USING PROMISES 
    useEffect(() => {
      axios
        .get('https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=869290f5e7f74a2283e02a4cd0ae9b6c')
        .then((res) => setmyData(res.data.articles))
        .catch((error) => setIsError(error.message));
    }, []);
   */

    
  //NOTE : USING Async Await  
  const getApiData = async () => {
    try {
      const res = await axios
        .get('https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=869290f5e7f74a2283e02a4cd0ae9b6c');
      setmyData(res.data.articles)
    } catch (error) {
      setIsError(error.message)
    }


  }
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className='container'>

      <h1>Axios Data</h1>
      {isError === "" && <h2>{isError}</h2>}
      <div className='card-container'>
        {Array.isArray(myData) &&
          myData.slice(0, 12).map((post) => {
            const { title, author, description, urlToImage, url } = post;
            return (
              <div className='card' key={url}>
                <img src={urlToImage} alt={title} />
                <div className='card-content'>
                  <h2>{title}</h2>
                  <h5>{author}</h5>
                  <p>{description}</p>
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;

