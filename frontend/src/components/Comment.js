import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class CommentComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: {},
    }
  }



  componentDidMount() {
    console.log("this", this);
    axios.get('http://127.0.0.1:8000/api/v1/comment')
      .then(res => {
        let commentData = res.data.filter((item, index) => {
          console.log('comment res.data: ', res.data);
          console.log('this.props.articleID: ', this.props.articleID);
          if (item.target_post === this.props.articleID) return true;
        });
        this.setState({
          comment: commentData
        });
        console.log('this.state.comment: ', this.state.comment);
      })
  }

  render() {
    return (
      <div>
      <Card title=<h1>Comments</h1>>
        <p
          style={{
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.85)',
            marginBottom: 16,
            fontWeight: 500,
          }}
        >
        </p>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
        >
          Inner Card content
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
        >
          Inner Card content
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
        >
          Inner Card content
        </Card>
      </Card>
      </div>
    );
  }

}

export default CommentComponent;
