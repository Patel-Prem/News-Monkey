import '../Assets/Style/NewsItem.css';
import defaultImg from '../Assets/Images/News.jpg'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let {title, description, imageUrl, newsUrl, sourceName, author, publishedAt} = this.props;

        return (
            <div>
                <div className="container my-3">
                    <div className="card m-auto">
                    <span class="position-absolute top-0 end-0 translate-middle-y badge rounded-pill bg-danger"> {sourceName} </span>
                        <img src={imageUrl ? imageUrl : defaultImg} className="card-img-top" alt="news image"/>
                        <div className="card-body">
                            <h5 className="card-title truncate title-truncate">{title}</h5>
                            <p className="card-text truncate description-truncate">{description}</p>
                            <p className="text">By {author? author: 'unknown'} on {new Date(publishedAt).toUTCString()}</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
