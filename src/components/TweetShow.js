import { useState } from 'react'
import { Link } from 'react-router-dom'

 const TweetShow = (props) => {
    
    const [count, setCount] = useState()

    return  (
        <div>
            <hr/>
            <button onClick={() => setCount(count + 1)}>{count} Likes</button>
       <Link to={`/tweets/${props.id}`}> <p>{props.description}</p></Link>
        { props.image_url ? 
       <Link to={`/tweets/${props.id}` }> <img src={props.image_url} alt=""></img></Link>
        :
        null
     }
        <Link to={`/tweets/${props.id}`}><button value={props.id} >Comment</button></Link>
    
        </div>

    )
}

export default TweetShow;