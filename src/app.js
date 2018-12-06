'use strict';
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom';

function myFunction() {
    // console.log('myFunction')
    // document.getElementById("show-react").style.color = "red";
    // document.getElementById("show-react").style.background = "green";
    const domContainer = document.querySelector('#show-react');
    ReactDOM.render(e(LikeButton), domContainer);
}

const e = React.createElement;
const like = e(
    'h1',
    {},
    'You Like This') 
const likeq = e(
    'h1',
    {},
    'like this?'
)

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    return e(
      'button',
      { onClick: () => this.setState({ liked: !this.state.liked }) },
      this.state.liked ? like : likeq
      
    );
    }
}



