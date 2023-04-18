import Login from '../pages/Login';
//import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Submission_Portal from '../pages/Submission_Portal';
import MyAccount from '../pages/MyAccount';
import Postings from '../pages/Postings';
//import SampleLogin from '../pages/SampleLogin';
function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/postings'>
              <Postings/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/submission-portal'>
              <Submission_Portal/>
            </Route>
            <Route path='/my-account'>
              <MyAccount/>
            </Route>
          </Switch>

        </div>

      </div>


    </Router>
   
  );
}

export default App;
