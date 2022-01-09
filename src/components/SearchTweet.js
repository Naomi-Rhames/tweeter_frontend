import  {useState} from 'react'
import { TweetShow } from '.'
import { connect } from 'react-redux'

const SearchTweet = ({tweets}) => {
    console.log(tweets)

    const [getTweet, setSearch] = useState("")


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return(
        <div>
            <form>
                <input type='text' placeholder='Search Tweet' onChange={handleChange} /> 
                <input type='submit'/>
            </form>
            {tweets.filter(tweet => {
                if(getTweet === ""){
                    return tweet
                } else if (tweet.description.toLowerCase().includes(getTweet.toLowerCase())){
                    return tweet
                }
            }).map(tweet => 
                <TweetShow  username={tweet.username} description={tweet.description} image_url={tweet.image_url} id={tweet.id} /> )
                }
         </div>
    )
  }

const mapStateToProps = (state) => ({tweets: state.tweets })

export default connect(mapStateToProps)(SearchTweet)