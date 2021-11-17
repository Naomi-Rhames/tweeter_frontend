import {connect} from 'react-redux'
import { useState } from 'react'
import {addTweet} from '../redux/actionCreators'

function TweetForm(){

   const [description, setDescription] = useState("")
   const [imageUrl, setImage] = useState("")

  const onSubmit = e => {
        e.preventDefault()
       const newTweet = {description, image_url: imageUrl}
       console.log(newTweet)
    }

        return (
            <form className="new_tweet" onSubmit={onSubmit}>
                <textarea type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What's happening?" name="description"></textarea>
                <br/>
                <label>Add URL </label>
                <input type="text" value={imageUrl} onChange={(e) => setImage(e.target.value)} name="imageUrl" />
                <br/>
                <input type="submit" value="Post Tweet" />
             </form>
        )
    
}


export default connect(null, {addTweet})(TweetForm);