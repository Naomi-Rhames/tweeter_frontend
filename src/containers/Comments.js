import React from 'react'
import { connect } from 'react-redux'
import { TweetCard } from '../components'

function Comments({comments}){
    return  <div className="comments">
        {comments.map(comment => <TweetCard {...comment} key={comment.id} />)}
    </div>
    
}
const mapStateToProps = (state) => ({})
export default connect()(Comments);