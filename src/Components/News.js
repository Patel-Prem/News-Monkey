import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import LoadingSpinner from './Spinner';

function News(props) {
  const [newsData, setNewsData] = useState({
    articles: [],
    isLoading: false,
    totalResults: 0,
    pages: 0,
    pageCount: 1,
  });

  useEffect(() => {
    async function fetchData() {
      setNewsData(prevState => ({
        ...prevState,
        isLoading: true
      }));
      const url = `https://newsapi.org/v2/top-headlines?apiKey=bcaa0c7987b0437db17fa96548c83a76&country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${newsData.pageCount}`;
      // console.log("- - - url - - -", url)
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewsData(prevState => ({
          ...prevState,
          articles: data.articles,
          isLoading: false,
          totalResults: data.totalResults,
          pages: Math.ceil(data.totalResults / props.pageSize)
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
        setNewsData(prevState => ({
          ...prevState,
          isLoading: false
        }));
      }
    }
    
    fetchData();
  }, [newsData.pageCount]);

  const previousBtn = () => {
    setNewsData(prevState => ({
      ...prevState,
      pageCount: prevState.pageCount - 1
    }));
  };

  const nextBtn = () => {
    setNewsData(prevState => ({
      ...prevState,
      pageCount: prevState.pageCount + 1
    }));
  };

  return (
    <div>
      {newsData.isLoading && <LoadingSpinner />}
      {!newsData.isLoading && (
        <div className="container-fluid my-3">
          <h3>Welcome to NewsMokey's top headlines</h3>
          <hr />
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {newsData.articles.map((element) => (
              <div key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={newsData.pageCount <= 1}
              type="button"
              className="btn btn-primary"
              onClick={previousBtn}
            >
              &larr; Previous
            </button>
            <button
              disabled={newsData.pageCount >= newsData.pages}
              type="button"
              className="btn btn-primary"
              onClick={nextBtn}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 12,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;