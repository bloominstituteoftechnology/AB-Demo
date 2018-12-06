'use strict';


function myFunction() {
    console.log('myFunction')
    document.getElementById("show-react").style.color = "red";
    document.getElementById("show-react").style.background = "green";
}


const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
    }
}

const domContainer = document.querySelector('#show-react');
ReactDOM.render(e(LikeButton), domContainer);
