import React, { Component } from 'react'
import './card.css'

export class NewsItem extends Component {

  render() {

    //for titile props
    const { titles, descriptions, imageUrl, NewsUrl, publishedAt, authorName, source, sourceName, sourceId } = this.props;



    return (
      <div>
        <div>
          <div className="card" style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
            marginBottom: "20px"
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#f5f5f5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.backgroundColor = "#fff";
            }}>
            <img src={imageUrl} alt="..." className="card-img" />
            <div className="card-body">
              <h2 className="card-title">{titles}...</h2>
              {authorName && <p className="card-text ">Author Name:- <strong>{authorName}</strong></p>}
              <p className="card-text">{descriptions}...</p>
              <p className="card-text"><strong>{publishedAt}</strong></p>
              <p className="card-text">{source}</p>
              {/* {sourceName && <p className="card-text">Source:- <strong>{sourceName}</strong>{sourceId ? `ID:- ${sourceId}` : ""}</p>} */}
              {/* so in javascript if we want to add hrml tag (like-br) than we have to add <React.Fragment>"html tag"</React.Fragment> */}
              {sourceName && (<p className="card-text">Source: <strong>'{sourceName}'</strong>{sourceId && <React.Fragment><br />ID: <strong>'{sourceId}'</strong></React.Fragment>}</p>)}


              <a href={NewsUrl} target='_blank' rel='noreferrer' className="card-btn">Read More</a>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

