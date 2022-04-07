import { NavLink } from 'react-router-dom'
import { logout } from '../redux/actionCreators'
import { connect } from 'react-redux'



function Nav({logout, username}){
    return username ?
     <nav>
        <NavLink to="/tweets" ><button>See Posts</button></NavLink>
       <NavLink to="/profile"><button>Profile</button></NavLink>
       <NavLink to="/logout"><button onClick={logout}>Logout</button></NavLink>
       <NavLink to="/search"><button >Search</button></NavLink>
    </nav>
    :
  <nav><i>Hello Fellow Tweeter, login or signup!</i></nav>
}

const mapStateToProps = state => ({username: state.user.username, email: state.user.email, bio: state.user.bio})

export default connect(mapStateToProps, {logout})(Nav);