import { TweeterFeed, Nav, Auth, TweetCard, MyProfile } from './components';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route} from 'react-router';
import { autoLogin} from './redux/actionCreators'
import { useEffect } from 'react'

function App({user, autoLogin}) {

 useEffect(() => localStorage.token && autoLogin(), [autoLogin]) // when a componment thats mounting once the comoponet is loaded in the virtrial  dom
  return (
   <>
   <h1>🕊</h1>
   <Nav/>
   {user.username && user.email ?
   <Switch>
     <Route path="/profile"><MyProfile/></Route>
     <Route path="/tweets/:id"><TweetCard/></Route>
     <Route path="/tweets"><TweeterFeed/></Route>
   </Switch> :
   <Auth/>
   }
   </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { autoLogin })(App);
