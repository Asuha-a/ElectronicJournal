import React from 'react';
import axios from 'axios';

import { Card } from 'antd';
import CustomForm from '../components/Form'

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
        console.log('res.data:', res.data);
      })
  }

  render() {
    console.log("this.state.article.txt", this.state.article.text);
    return (
      <Card title={this.state.article.title}>
        <p>{this.state.article.text}</p>
        <br />
        <h2>Add New Comment</h2>
        <CustomForm
          requestType="post"
          target_post={this.state.article.title}/>
      </Card>
    );
  }
}

export default ArticleDetail;
