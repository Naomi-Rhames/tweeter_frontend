import { TweeterFeed, Nav } from './components';
import './App.css';
import { connect } from 'react-redux'
import { Switch, Route} from 'react-router';

function App(props) {
  console.log(props)
  return (
   <>
   <h1>🕊</h1>
   <Nav/>
   <Switch>
     <Route path="/tweets"><TweeterFeed></TweeterFeed></Route>
   </Switch>
   </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(App);
