import React from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';
import CustomForm from '../components/Form';
import Loading from '../components/Loading'

class CommentFormComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  /*
  componentWillReceiveProps(newProps) {
    console.log('isAuthenticated: ', newProps.isAuthenticated);
  }
  */


  componentDidMount() {
    console.log('isAuthenticated: ', this.props.isAuthenticated);
  }


  render() {
    if (!this.props.isAuthenticated)
      return <Loading />;
    return (
      <Card title=<h1>Add New Comment</h1>>
        <CustomForm
          requestType="post"
          target_post={this.props.articleID}/>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

export default connect(mapStateToProps)(CommentFormComponent);
