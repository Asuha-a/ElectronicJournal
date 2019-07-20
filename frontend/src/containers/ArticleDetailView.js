import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

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
      </Card>
    );
  }
}

export default ArticleDetail;
