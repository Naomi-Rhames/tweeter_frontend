function CommentCard({ username, description}){
    return <div className="comment">
      <p> {username} says:  {description}</p>
    </div>

}

export default CommentCard;