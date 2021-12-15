import{ connect } from 'react-redux'
// import React, { Component} from 'react';
import  { useEffect } from 'react';
import { fetchTweets} from '../redux/actionCreators'
import  TweetShow  from '../components/TweetShow';
import TweetForm from '../components/TweetForm';


// class TweeterFeed extends Component {

//    componentDidMount(){ /// Mounting means rendering elements into the DOM
//        this.props.fetchTweets()
//    }
//   /// Rudex is handling my global state which is stored into my index.js aka  The Parent Component
//     render(){
    const TweeterFeed = ({ tweets, fetchTweets }) => {

       

        useEffect(() => {
        fetchTweets()}, [fetchTweets]
        )

   
        return (
            <div>
                <br/>
              <TweetForm />
              { tweets ?
               tweets.map((t) => <TweetShow  username={t.username} description={t.description} image_url={t.image_url} id={t.id} /> )
                :
                <h2>loading....</h2>
              }
            </div>
        )

    
}
// {props.tweets.map(t => <TweetShow {...t}/>)}

const mapStateToProps = (state) => ({ tweets: state.tweets})


export default connect(mapStateToProps, { fetchTweets })(TweeterFeed)