import { TweeterFeed, Nav, Auth } from './components';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route} from 'react-router';
import { autoLogin} from './redux/actionCreators'
import { useEffect } from 'react'

function App({user, autoLogin}) {
 useEffect(() => localStorage.token && autoLogin(), [autoLogin])
  return (
   <>
   <h1>🕊</h1>
   {user.username && user.email ?
   <Switch>
      <Nav/>
     <Route path="/tweets"><TweeterFeed></TweeterFeed></Route>
   </Switch> :
   <Auth/>
   }
   </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { autoLogin })(App);
