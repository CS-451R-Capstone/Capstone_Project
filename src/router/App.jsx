import Login from '../pages/Login';
//import SignUp from '../pages/SignUp';
import AuthDetails from '../AuthDetails';
import Home from '../pages/Home';
import '../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Switch>
            <Route path='/home'>
              <Home/>
            </Route>

            <Route exact path='/'>
              <Login/>
              <AuthDetails/>
            </Route>

          </Switch>

        </div>

      </div>


    </Router>
   
  );
}

export default App;
