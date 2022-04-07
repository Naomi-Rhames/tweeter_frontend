import { connect } from 'react-redux'
import { fetchUser} from '../redux/actionCreators'

const myProfile = ({username, email, bio}) => {
    return <div>
        <h1>👤</h1>
       <i><p>Hello {username} Welcome to your profile!</p></i>
        <hr/>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Your Bio:</p>
        <p>{bio}</p>
    </div>
    

}
const mapStateToProps = (state) => ({username: state.user.username, email: state.user.email, bio: state.user.bio})
export default connect(mapStateToProps, {fetchUser})(myProfile)
 

