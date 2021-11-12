import { TweeterFeed, Nav, Auth } from './components';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route} from 'react-router';
// import { useEffect } from 'react'

function App(props) {
//  useEffect(() => localStorage.token &&)
  return (
   <>
   <h1>🕊</h1>
   {props.user.username && props.user.email ?
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

export default connect(mapStateToProps)(App);
