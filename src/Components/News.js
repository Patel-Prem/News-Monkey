import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import LoadingSpinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import '../Assets/Style/News.css'


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
      // console.log("fetchData is CALLED ...");
      setNewsData((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${newsData.pageCount}`;
      console.log("- - - url - - -", url)
      try {
        if (newsData.pageCount === 1) {
          props.setProgress(10);
        }
        const response = await fetch(url);
        const data = await response.json();
        if (newsData.pageCount === 1) {
          props.setProgress(50);
        }
        setNewsData((prevState) => ({
          ...prevState,
          // articles: data.articles,
          articles: newsData.articles.concat(data.articles),
          isLoading: false,
          totalResults: data.totalResults,
          pages: Math.ceil(data.totalResults / props.pageSize),
        }));
        if (newsData.pageCount === 1) {
          props.setProgress(100);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setNewsData((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    }

    fetchData();
    }, [newsData.pageCount]);

  const fetchMoreData = async () => {
    // console.log("fetchMoreData is CALLED ...");
    setNewsData((prevState) => ({
      ...prevState,
      pageCount: prevState.pageCount + 1,
    }));
  };


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  // const previousBtn = () => {
  //   setNewsData(prevState => ({
  //     ...prevState,
  //     pageCount: prevState.pageCount - 1
  //   }));
  // };

  // const nextBtn = () => {
  //   setNewsData(prevState => ({
  //     ...prevState,
  //     pageCount: prevState.pageCount + 1
  //   }));
  // };

  return (
    <div>
      {newsData.isLoading && <LoadingSpinner />}
      <div className="container-fluid my-3">

        <h3 className="text-center">{`Welcome to NewsMokey's ${capitalizeFirstLetter(props.category)} top headlines`}</h3>
        <hr />
        <InfiniteScroll
          dataLength={newsData.articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={newsData.articles.length !== newsData.totalResults}
          // loader={<LoadingSpinner />}
        >
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {newsData.articles.map((element) => (
              <div key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  sourceName={element.source.name}
                  author={element.author}
                  publishedAt={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
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
          </div> */}
      </div>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 12,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
