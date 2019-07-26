import React from 'react';

import { Form, Input, Button } from 'antd';
import axios from 'axios';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

class CustomForm extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleFormSubmit = (event, requestType) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const comment = event.target.elements.comment.value;

    console.log("name: ", name);
    console.log("comment: ", comment);
    console.log("target_post: ", this.props.target_post);

    window.location.reload();

    switch(requestType) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/v1/comment/', {
          author: name,
          target_post: this.props.target_post,
          comment: comment
        }).then(res => console.log(res))
          .catch(error => console.error(error));
        console.log('post completed');
      case 'put':
        return axios.put('http://127.0.0.1:8000/api/v1/comment/', {
          author: name,
          target_post: this.props.target_post,
          comment: comment
        }).then(res => console.log(res))
          .catch(error => console.error(error));
    }
    //this.props.history.push(`/articles/${this.props.target_post}`);
  }

  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
          event,
          this.props.requestType,
        )}>
          <Form.Item label="">
            <Input type='hidden' value='1' name="name" placeholder="Put your name here..." />
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

export default withRouter(CustomForm);
