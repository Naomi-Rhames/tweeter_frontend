import React from 'react'

 const TweetShow = (props) => {
    console.log(props)
    // debugger
    
    return  (
        <div>
            <hr/>
        {/* <br/> */}
        
        <h3>{props.description}</h3>
        { props.image_url ? 
        <img src={props.image_url} alt=""></img>
        :
        null
     }
        
        </div>

    )
}

export default TweetShow;