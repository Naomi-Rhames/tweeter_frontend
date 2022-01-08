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
           
         </div>
    )
  }

const mapStateToProps = (state) => ({tweets: state.tweets })

export default connect(mapStateToProps)(SearchTweet)