import Login from '../pages/Login';
//import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Submission_Portal from '../pages/Submission_Portal';
import MyAccount from '../pages/MyAccount';
import Postings from '../pages/Postings';
import { Provider } from 'react-redux';
import store from '../store';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';

//import SampleLogin from '../pages/SampleLogin';
/*
if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwtDecode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
  }
  window.location.href = './login';
}
*/

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/postings' component={Postings}/>
              <Route exact path='/login' component={Login} />
              <Route exact path='/postings/submission-portal' component={Submission_Portal}/>
              <Route exact path='/my-account' component={MyAccount}/>
            </Switch>

          </div>

        </div>
      </Router>

    </Provider>

    
   
  );
}

export default App;
