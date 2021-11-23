import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTweet, clearTweets } from '../redux/actionCreators'
import { useEffect } from 'react'
import { CommentForm } from '.'

function TweetCard({fetchTweet, description, image_url, clearTweets, id}){
    const routeId = useParams().id

    useEffect(()=> {
        fetchTweet(routeId)
        return clearTweets
    }, [fetchTweet, routeId, clearTweets])

   const loadedicon = () => <div class="loader"></div>

    const fetchedTweet = () => <div className ="show">
        <p>{description}</p>
        { image_url ? 
        <img src={image_url} alt=""></img>
        :
        null
     }
     <br/>
     <br/>
     <CommentForm/>
    </div>

    return id ? fetchedTweet() : loadedicon

}

const mapStateToProps = (state) => {
    return {...state.createdTweets }
}

export default connect(mapStateToProps, {fetchTweet, clearTweets})(TweetCard);