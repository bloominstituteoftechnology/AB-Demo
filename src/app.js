'use strict';


var Greeting = React.createClass({
    render: function() {
        return (
            React.createElement('h1', null, 'Hello, React!')
          );
    }
  });



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
