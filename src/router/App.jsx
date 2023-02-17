import Login from '../pages/Login';
//import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Submission_Portal from '../pages/Submission_Portal';
import MyAccount from '../pages/MyAccount';
function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Login/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route path='/submission_portal'>
              <Submission_Portal/>
            </Route>
            <Route path='/my_account'>
              <MyAccount/>
            </Route>

          </Switch>

        </div>

      </div>


    </Router>
   
  );
}

export default App;
