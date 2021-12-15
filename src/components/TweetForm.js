import {connect} from 'react-redux'
import { useState } from 'react'
import {addTweet} from '../redux/actionCreators'

function TweetForm( {addTweet, user_id}){
/// from not having a constuctor you have to use hooks
   const [description, setDescription] = useState("")
   const [imageUrl, setImageUrl] = useState("")

  const onSubmit = e => {
        e.preventDefault()
       const newTweet = {description, image_url: imageUrl, user_id} 
      addTweet(newTweet) 
     setDescription("")
     setImageUrl("")
    }


        return (
            <form className="new_tweet" onSubmit={onSubmit}>
                <textarea type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What's happening?" name="description"></textarea>
                <br/>
                <label>Add Picture! </label>
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} name="imageUrl" />
                <br/>
                <input type="submit"  value="Post Tweet" />
             </form>
        )
    
}


const mapToStateToProps = state => ({user_id: state.user.id})

export default connect(mapToStateToProps, {addTweet})(TweetForm);