import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {


  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  }

  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }



  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da9fae90e9b24d65a415d780332f2b57&page=1&pageSize=${this.props.pageSize}`; // no space's side on & side


    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }


  handlePreClick = async () => {
    let newPage = this.state.page - 1;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da9fae90e9b24d65a415d780332f2b57&page=${newPage}&pageSize=${this.props.pageSize}`; // no space's side on & side
    this.setState({ loading: true });

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: newPage,
      articles: parseData.articles,
      loading: false,

    });
  }



  handleNexClick = async () => {
    let newPage = this.state.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da9fae90e9b24d65a415d780332f2b57&page=${newPage}&pagesize=${this.props.pageSize}`; // no space's side on & side
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: newPage,
      articles: parseData.articles,
      loading: false,
    });
  }



  render() {
    return (
      <div className="container my-3" style={{ background: "linear-gradient(to right, #ff9966, #ff5e62)", color: "#fff", padding: "20px", borderRadius: "10px" }}>
        <h2 className="text-center" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  // ternary operator  like condition ? "true" : "false"
                  titles={element.title ? element.title.slice(0, 44) : ""}
                  descriptions={element.description ? element.description.slice(0, 55) : ""}
                  imageUrl={element.urlToImage}
                  NewsUrl={element.url}
                  publishedAt={element.publishedAt}
                  authorName={element.author}
                  sourceName={element.source.name}
                  sourceId={element.source.id}
                />
              </div>

            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePreClick}
            className="btn"
            style={{
              backgroundColor: "#ff5e62",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {

              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {

              e.target.style.backgroundColor = "#ff5e62";
              e.target.style.color = "white";
              e.target.style.transform = "none";
              e.target.style.boxShadow = "none";
            }}
          >
            &larr; Previous
          </button>

          <button

            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}


            type="button"
            onClick={this.handleNexClick}
            className="btn"
            style={{
              backgroundColor: "#ff5e62",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ff5e62";
              e.target.style.color = "white";
              e.target.style.transform = "none";
              e.target.style.boxShadow = "none";
            }}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;