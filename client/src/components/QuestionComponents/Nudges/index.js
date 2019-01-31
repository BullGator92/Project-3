import React, { Component } from 'react';
import Checks from '../Checks';
import API from '../../../utils/API';

class Nudges extends Component {
  state = {
    users: [],
    User: {},
    title: 'Nudges',
    question: 'Please select your nudges.',
    userField: 'nudges',
    nextQuestionLink: '/'
  };

  componentDidMount() {
    this.loadUserInfo();
  }
  loadUserInfo = () => {
    API.getUsers().then(res =>
      this.setState({
        users: res.data,
        User: res.data[0]
      })
    );
  };

  render() {
    return (
      <Checks
        question={this.state.question}
        userField={this.state.userField}
        link={this.state.nextQuestionLink}
        title={this.state.title}
      />
    );
  }
}

export default Nudges;
