import { useState } from  'react'
import { connect } from 'react-redux'
import { submitComment } from '../redux/actionCreators'

function CommentForm({tweetId, submitComment}){
    const [description, setDescription] = useState("")

    const onSubmit = (e) => {
        e.preaventDefault()
        const newComment = {description}
        submitComment(newComment, tweetId)
        setDescription("")
    }

    return <form className="new_comment" onSubmit={onSubmit}>
         <textarea type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add a Comment..." name="description"></textarea><br/>
          <input type="submit" value="Submit" />
    </form>



}


const mapStateToProps = (state) => ({tweetId: state.createdTweets.id})

export default connect(mapStateToProps, {submitComment}) (CommentForm);