import React from 'react'
import { connect } from 'react-redux'
import { CommentCard } from '../components'

function Comments({tweets}){
     console.log(tweets)

    return  <div className="all_comments">
        {tweets.map(comment => <CommentCard {...comment } key={comment.id} />)}
    </div>
    
}
const mapStateToProps = (state) => ({ tweets: state.setTweet.comments })

export default connect(mapStateToProps)(Comments);