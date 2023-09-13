import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        console.log("This is a new component constructor!");
        this.state = {
            article: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=582c85691de742db8243b95c86179544&page=${this.props.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ article: parseData.articles, totalResults: parseData.totalResults })
    }

    handlePreviousClick = async () => {
        console.log("Previous button clicked.");
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=582c85691de742db8243b95c86179544&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            article: parseData.articles
        })
    }

    handleNextClick = async () => {
        console.log("Next button clicked.");
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=582c85691de742db8243b95c86179544&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page + 1,
            article: parseData.articles
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>Top News - by News Monkey</h2>
                {/* <Spinner /> */}
                <div className='row my-3'>
                    {this.state.article.map((element) => {
                        return <div className='col-md-4 my-3' key={element.url}>
                            <NewsItem title={element.title.slice(0, 40)} desc={element.description.slice(0, 90)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}/>
                        </div>;
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}
