import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 12,
  };

  static propsType = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    // console.log('constructor')
    this.state = {
      articles: [],
      isLoading: false,
      totalResults: 0,
      // pageSize: this.props.pageSize,
      pages: 0,
      pageCount: 1,
    };
  }

  async componentDidMount() {
    // this.setState({ isLoading: true });
    // console.log("componentDidMount");

    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=bcaa0c7987b0437db17fa96548c83a76&pageSize=12&page=1`
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcaa0c7987b0437db17fa96548c83a76&pageSize=${this.props.pageSize}&page=${this.state.pageCount}`;
    console.log(url)
    await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log("response : ", response);
        this.setState(
          (prevState) => ({
            ...prevState,
            articles: response.articles,
            isLoading: false,
            totalResults: response.totalResults,
          }),
          () => {
            this.setState((prevState) => ({
              ...prevState,
              pages: Math.ceil(this.state.totalResults / this.props.pageSize),
            }));
          }
        );
      });
  }

  previousBtn = async () => {
    // console.log("Previous")
    this.setState({
      articles: this.state.articles,
      isLoading: this.state.isLoading,
      totalResults: this.state.totalResults,
      pages: this.state.pages,
      pageCount: this.state.pageCount - 1,
    });
  };

  nextBtn = async () => {
    console.log("Next");
    this.setState({
      articles: this.state.articles,
      isLoading: this.state.isLoading,
      totalResults: this.state.totalResults,
      pages: this.state.pages,
      pageCount: this.state.pageCount + 1,
    });
  };

  render() {
    // console.log('render')
    return (
      <div>
        {/* { 
          this.state.isLoading && 
          <Spinner /> 
        } */}

        {!this.state.isLoading && (
          <div className="container-fluid my-3">
            <h3>Welcome to NewsMokey's top headlined</h3>
            <hr />

            {/* <div className='container-fluide d-flex justify-content-between'>
              <button type="button" class="btn btn-primary">&larr; Privious</button>
              <button type="button" class="btn btn-primary">Next &rarr;</button>
            </div> */}

            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>

            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.pageCount <= 1}
                type="button"
                className="btn btn-primary"
                onClick={this.previousBtn}
              >
                &larr; Previous
              </button>
              {/* <button type="button" className="btn btn-primary" onClick={this.nextBtn}>Next &rarr;</button> */}
              <button
                disabled={this.state.pageCount >= this.state.pages}
                type="button"
                className="btn btn-primary"
                onClick={this.nextBtn}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default News;
