import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTweet, clearTweets } from '../redux/actionCreators'
import { useEffect } from 'react'
import { CommentForm, Comments } from '.'


function TweetCard( {fetchTweet, description, image_url, clearTweets, username, id} ){
 
 
    const routeId = useParams().id

    

    useEffect(()=> { 
        fetchTweet(routeId)
        return clearTweets
    }, [fetchTweet, routeId, clearTweets]) 

   const loadedicon = () => <div class="loader"></div>

    const fetchedTweet = () => <div className ="show">
        <br/>
        <p>{description}</p>
        { image_url ? 
        <img src={image_url} alt=""></img>
        :
        null
     }
     <i><p> posted by the user {username}</p></i>
     <br/>
     <br/>
     <CommentForm/>
     <Comments/>
     
    </div>
    return id ? fetchedTweet() : loadedicon
}

const mapStateToProps = (state) => {
    return {...state.setTweet}
}
 


export default connect(mapStateToProps, {fetchTweet, clearTweets})(TweetCard);