import React from 'react'
import { Link } from 'react-router-dom'

 const TweetShow = (props) => {
    
    
    return  (
        <div>
            <hr/>
     <i><p>{props.username}</p></i>
        
       <Link to={`/tweets/${props.id}`}> <p>{props.description}</p></Link>
        { props.image_url ? 
        <img src={props.image_url} alt=""></img>
        :
        null
     }
        <Link to={`/tweets/${props.id}/comments`}><button value={props.id} >Comment</button></Link>
        </div>

    )
}

export default TweetShow;