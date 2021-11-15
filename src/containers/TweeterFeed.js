import{ connect } from 'react-redux'
import React, { Component} from 'react';
import { fetchTweets} from '../redux/actionCreators'


class TweeterFeed extends Component {
    render(){
        return (
            <div>
                Tweets goes here
            </div>
        )
    }
}
export default connect(null, { fetchTweets })(TweeterFeed)