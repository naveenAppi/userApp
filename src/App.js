import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store';
import { ToastContainer } from 'react-toastify';
import jwt_decode from 'jwt-decode';


import './App.css';
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import LandingPage from './Components/Layouts/LandingPage';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';


import setAuthToken from './Utils/setAuthToken';
import {setCurrentUser , logoutUser} from './Actions/authActions';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/Common/PrivateRoute';
import CreateProfile from './Components/Create-Profile/CreateProfile';
import {clearCurrentProfile} from './Actions/profileActions'
import EditProfile from './Components/Edit-profile/EditProfile';
import  AddExperince  from './Components/Add-Creadentials/AddExperince';
import  AddEducation  from './Components/Add-Creadentials/AddEducation';
import  Profiles  from './Components/Profiles/Profiles';
import  Profile  from './Components/Profile/Profile';
import Posts  from './Components/Post/Posts';
import NotFound from './Components/NotFound/NotFound';
import IndividualPost from './Components/IndividualPost/IndividualPost';


// Check for token
if (localStorage.jwt_token) {
  // Set auth token header auth
  setAuthToken(localStorage.jwt_token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwt_token);
  // Set user and isAuthenticated
  Store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    Store.dispatch(logoutUser());
    // Clear current Profile
    Store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <Router>
      <div>
            <Navbar />
            <ToastContainer/>
            <Route path='/' exact component={LandingPage} />
            <div className="container">
            <Route path='/register' exact component={Register} />
              <Route path='/login' exact component={Login} />
              <Switch>
              <PrivateRoute path='/dashboard' exact component={Dashboard} />
              </Switch>
              <Switch>
              <PrivateRoute path='/create-profile' exact component={CreateProfile} />
              </Switch>
              <Switch>
              <PrivateRoute path='/edit-profile' exact component={EditProfile} />
              </Switch>
              <Switch>
              <PrivateRoute path='/add-experince' exact component={AddExperince} />
              </Switch>
              <Switch>
              <PrivateRoute path='/add-education' exact component={AddEducation} />
              </Switch>
              <Switch>
              <PrivateRoute path='/posts' exact component={Posts} />
              </Switch>
              <Switch>
              <PrivateRoute path='/post/:id' exact component={IndividualPost} />
              </Switch>
              <Route path='/developer' exact component={Profiles} />
              <Route path='/profile/:handle' exact component={Profile} />
              <Route path='/Not-Found' exact component={NotFound} />
             
            </div>
            <Footer /> 
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
