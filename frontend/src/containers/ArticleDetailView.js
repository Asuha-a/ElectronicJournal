import React from 'react';
import axios from 'axios';

import { Card } from 'antd';
import CustomForm from '../components/Form';
import CommentComponent from '../components/Comment';

import Loading from '../components/Loading'

class ArticleDetail extends React.Component {

  state = {
    article: {}
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/v1/${articleID}`)
      .then(res => {
        this.setState({
          article: res.data
        });
        console.log('article res.data: ', res.data);
      })
  }

  render() {
    if (!Number.isInteger(this.state.article.id))
      return <Loading />;

    console.log('this.state.article.id', this.state.article.id);
    return (
      <div>
        <Card title=<h1>{this.state.article.title}</h1>>
          <p>{this.state.article.text}</p>
        </Card>
        <CommentComponent articleID={this.state.article.id}/>
        <Card title=<h1>Add New Comment</h1>>
          <CustomForm
            requestType="post"
            target_post={this.state.article.id}/>
        </Card>
      </div>
    );
  }
}

export default ArticleDetail;
