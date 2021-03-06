import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount = () => {
    this.setState({
      tweets: [...this.state.tweets, ...this.props.newTweets]
    }, console.log(this.state.tweets))
  }

  // TODO: shouldComponentUpdate()

  shouldComponentUpdate = (nextProps) => {
    return (nextProps.newTweets.length === this.props.newTweets.length)
  }

  // TODO: componentWillReceiveProps()

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;