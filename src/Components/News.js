import React, { Component } from 'react'
// import Navbar from './Navbar'
import NewsItem from './NewsItem'
// import Spinner from './Spinner'
// import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 12

  }

  static propsType = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }


  constructor() {
    super();
    // console.log('constructor')
    this.state = {
      articles: [],
      isLoading: false,
      totalRowCount: 0,
      perPage: 12,
      pageCount: 0,
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bcaa0c7987b0437db17fa96548c83a76&pageSize=12`
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcaa0c7987b0437db17fa96548c83a76&pageSize=${this.props.pageSize}`
    await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log('response : ', response)
        this.setState({
          totalRowCount: response.totalResults,
          articles: response.articles,
          isLoading: false
        })
      });

    this.setState({
      pageCount: Math.ceil(this.state.totalRowCount / this.state.perPage),
    })
  }

  // handlePageChange = async (data) => {

  //   this.setState({ isLoading: true });

  //   console.log('pagechnage', data.selected + 1)

  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bcaa0c7987b0437db17fa96548c83a76&pageSize=12&page=${data.selected + 1}`;

  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log('response : ', response)
  //     this.setState({
  //       totalRowCount: response.totalResults,
  //       articles: response.articles,
  //       isLoading: false
  //     })
  //   });
  // }

  render() {
    console.log('render')
    return (
      <div>
        {/* { 
          this.state.isLoading && 
          <Spinner /> 
        } */}

        {
          !this.state.isLoading &&
          <div className="container-fluid my-3">
            <h3>Welcome to NewsMokey's top headlined</h3>
            <hr />
            {/* <ReactPaginate
              pageCount={this.state.pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'. . .'}
              containerClassName={'pagination justify-content-end m-3'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
              activeLinkClassName={'page-link'}
              onPageChange={this.handlePageChange}
            /> */}

            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {this.state.articles.map((element) => {
                return <div key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              })}
            </div>

            {/* <div className="row">
              {this.state.articles.map((element) => {
                return <div key={element.url} className="col-md-4">
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              })}
            </div> */}

            {/* <ReactPaginate
              pageCount={this.state.pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'. . .'}
              containerClassName={'pagination justify-content-end m-3'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
              activeLinkClassName={'page-link'}
              onPageChange={this.handlePageChange}
            /> */}
          </div>
        }
      </div>
    )
  }
}
export default News
