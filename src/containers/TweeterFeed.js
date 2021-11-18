import{ connect } from 'react-redux'
import React, { Component} from 'react';
import { fetchTweets} from '../redux/actionCreators'
import  TweetShow  from '../components/TweetShow';
import TweetForm from '../components/TweetForm';


class TweeterFeed extends Component {

   componentDidMount(){
       this.props.fetchTweets()
   }
    render(){
  
    
        return (
            <div>
                <br/>
              <TweetForm />
              { this.props.tweets[0] ?
               this.props.tweets[0].map((t) => <TweetShow description={t.description} image_url={t.image_url} />)
                :
                <h2>loading....</h2>
              }
            </div>
        )

    }
  
}
// {this.props.tweets.map(t => <TweetShow {...t}/>)}

const mapStateToProps = (state) => ({ tweets: state.tweets})


export default connect(mapStateToProps, { fetchTweets })(TweeterFeed)