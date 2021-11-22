import React from 'react'
import { Link } from 'react-router-dom'

 export const AllTweet = (props) => {
    console.log(props)

    
    return  (
        <div className="posted_tweets">
            <hr/>
        {/* <br/> */}
        
        <p>{props.description}</p>
        { props.image_url ? 
        <img src={props.image_url} alt=""></img>
        :
        null
     }
     <Link to="/tweets/:id"></Link> <button value={props.id}>Comment</button>
        
        </div>

    )
}
