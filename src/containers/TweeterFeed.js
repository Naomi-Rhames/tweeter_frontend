import{ connect } from 'react-redux'
import React, { Component} from 'react';
import { fetchTweets} from '../redux/actionCreators'
import TweetForm from '../components/TweetForm';


class TweeterFeed extends Component {
    componentDidMount(){
        this.props.fetchTweets()
    }


    render(){
        return (
            <div>
                <br/>
              <TweetForm/>
            </div>
        )
    }
}
export default connect(null, { fetchTweets })(TweeterFeed)