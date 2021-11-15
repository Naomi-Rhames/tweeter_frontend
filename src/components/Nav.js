import { NavLink } from 'react-router-dom'
import { TweeterFeed } from '.';
import { connect } from 'react-redux'
import { fetchTweets } from '../redux/actionCreators'

function Nav(){
    return <nav>
        <NavLink to="tweets">See Posts</NavLink>
        <TweeterFeed/>
    </nav>
}

export default connect(null, { fetchTweets })(Nav);