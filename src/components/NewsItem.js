import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, desc, imageUrl, newsUrl, author, publishedAt} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="Content Not found"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            <p className="card-text"><small class="text-muted">Author : {author}<br></br> Last updated {new Date(publishedAt).toUTCString() }</small></p>
                            <a href={newsUrl} className="btn btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}
