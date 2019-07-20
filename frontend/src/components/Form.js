import React from 'react';

import { Form, Input, Button } from 'antd';
import axios from 'axios';

class CustomForm extends React.Component {


  handleFormSubmit = (event, requestType) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const comment = event.target.elements.comment.value;

    console.log("name: ", name);
    console.log("comment: ", comment);
    console.log("target_post: ", this.props.target_post);

    console.log(axios.post('http://127.0.0.1:8000/api/v1/comment/', {
      author: name,
      target_post: this.props.target_post,
      comment: comment
    }));

    switch(requestType) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/v1/comment/', {
          author: name,
          target_post: this.props.target_post,
          comment: comment
        }).then(res => console.log(res))
          .catch(error => console.error(error));
      case 'put':
        return axios.put('http://127.0.0.1:8000/api/v1/comment/', {
          author: name,
          target_post: this.props.target_post,
          comment: comment
        }).then(res => console.log(res))
          .catch(error => console.error(error));
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
          event,
          this.props.requestType,
        )}>
          <Form.Item label="Name">
            <Input name="name" placeholder="Put your name here..." />
          </Form.Item>
          <Form.Item label="Comment">
            <Input name="comment" placeholder="Enter some text..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
