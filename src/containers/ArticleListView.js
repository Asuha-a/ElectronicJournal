import React from 'react';
import Articles from '../components/Article';
import axios from 'axios';
import { connect } from 'react-redux';

class ArticleList extends React.Component {

  state = {
    articles: []
  }

  componentDidMount() {
    axios.get('https://electronic-journal-asuha.herokuapp.com/api/v1/')
      .then(res => {
        this.setState({
          articles: res.data
        });
        console.log('res.data:', res.data);
      })
  }

  render() {
    return (
      <Articles data = {this.state.articles}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

export default connect(mapStateToProps)(ArticleList);
