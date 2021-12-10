function CommentCard({ username, description}){
 console.log(username)
    return <div className="comment">

      <p> {username} says:  {description}</p>
    </div>

}

export default CommentCard;