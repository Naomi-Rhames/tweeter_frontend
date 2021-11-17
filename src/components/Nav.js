import { NavLink } from 'react-router-dom'
import { logout } from '../redux/actionCreators'
import { connect } from 'react-redux'


function Nav({logout, username}){
    return username?
     <nav>
        <NavLink to="tweets"><button>See Posts</button></NavLink>
        <button onClick={logout}>Logout</button>
    </nav>
    :
  <nav><i>Hello Fellow Tweeter, Login or Signup!</i></nav>
}

const mapStateToProps = state => ({username: state.user.username, email: state.user.email, bio: state.user.bio})


export default connect(mapStateToProps, {logout})(Nav);