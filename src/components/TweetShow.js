import React from 'react'
import { Link } from 'react-router-dom'

 const TweetShow = (props) => {
    console.log(props)
    
    
    return  (
        <div>
            <hr/>
     <i><p>{props.username}</p></i>
        
        <p>{props.description}</p>
        { props.image_url ? 
        <img src={props.image_url} alt=""></img>
        :
        null
     }
        <Link to={`/tweets/${props.id}`}><button value={props.id}>Comment</button></Link>
        </div>

    )
}

export default TweetShow;