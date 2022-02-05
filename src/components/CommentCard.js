function CommentCard({ username, description}){
    return <div className="comment">
    
      <br/>
      <p> {username} says:  {description}</p>
    </div>

}

export default CommentCard;