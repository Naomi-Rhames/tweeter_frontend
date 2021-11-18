import React from 'react'

 const TweetShow = (props) => {
    console.log(props)
    return  (
        <div>
        {/* <br/> */}
        
        <h3>{props.description}</h3>
        { props.image_url ? 
        <img src={props.image_url}></img>
        :
        null
 }
        </div>
    )
}

export default TweetShow;