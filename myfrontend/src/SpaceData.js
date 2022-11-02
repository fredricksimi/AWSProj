import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

class ArticleComponent extends React.Component{
    state = {
        articles: []
    }
    componentDidMount(){
        axios.get('http://ec2-18-208-219-209.compute-1.amazonaws.com.nip.io:4000/spacedata')
            .then((res) => {
                console.log(res)
                this.setState({articles: res.data})
            })
    }

    render(){
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Article</th>
                    <th scope="col">News Site</th>
                    <th scope="col">Date Published</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.articles
                    .map((article, index) =>
                        <tr>
                            <th key={article.id}>{index+1}</th>
                            <td><a href={article.url}>{article.title}</a></td>
                            <td>{article.newsSite}</td>
                            <td>{article.publishedAt}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default ArticleComponent