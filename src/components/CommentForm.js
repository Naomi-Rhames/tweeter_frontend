import { useState } from  'react'
import { connect } from 'react-redux'
import { submitComment } from '../redux/actionCreators'

function CommentForm({tweetId, submitComment}){
    const [description, setDescription] = useState("") 
    const onSubmit = (e) => {
        e.preventDefault()
        const newComment = {description, tweet_id: tweetId} 
        submitComment(newComment, tweetId)
        setDescription("")
    }

    const handleChange = (e) => {
        const newComment = e.target.value
        setDescription(newComment)
    }

    return <form className="new_comment" onSubmit={ (e) => onSubmit(e)}>
         <textarea type='text' value={description} onChange={handleChange} placeholder="Add a Comment..." name="description"></textarea><br/>
          <input type="submit" value="Submit" />
    </form>



}


const mapStateToProps = (state) => ({tweetId: state.setTweet.id})


export default connect(mapStateToProps, {submitComment})(CommentForm);