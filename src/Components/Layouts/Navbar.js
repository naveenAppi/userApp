import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { clearCurrentProfile } from '../../Actions/profileActions';
import { logoutUser } from '../../Actions/authActions';

class Navbar extends Component {
  
  signOutHandler = (e) => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }


  render() {
      
        return (
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <Link className="navbar-brand" to="/">
                Developer's-Hub
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto" id="navbar">
                <li className="nav-item">
                <Link className="nav-link" to="/developer">
                Developer
            </Link>
                    </li>
                  </ul>

                  <ul className="navbar-nav ml-auto" >
                  <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                  Dashboard
              </Link>
                      </li>
                  </ul>
                  <ul className="navbar-nav ">
                  <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                  PostFeeds
              </Link>
                      </li>
                  </ul>
                  
                  
                {(!this.props.auth.isAuthenticated ?
                  <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                  <Link className="nav-link" to="/login">
                  LogIn
              </Link>
            </li>
             <li className="nav-item">
             <Link className="nav-link" to="/register">
                 SignUp
             </Link>
                            
              </li>
                    </ul> :
                    <ul className="navbar-nav mr-auto">
                    <li style={{float:"left"}} className="nav-item">
                    <Link className="nav-link" to={`/profile/${this.props.auth.user.name}`}>
                          <img src={this.props.auth.user.avatar} alt="" className="profile-pic"/>
                            <span> {this.props.auth.user.name}</span>
                </Link>
              </li>
               <li className="nav-item">
               <Link className="nav-link" to="/" onClick={this.signOutHandler}>
                   SignOut
               </Link>
                              
                </li>
                  </ul>
                  
                  )}
               
              </div>
            </div>
          </nav>
                
            </div>
        );
    }
}
const mapStateToProps = state => ({
  auth: state.auth,
  
})

export default connect(mapStateToProps , {logoutUser , clearCurrentProfile}) (Navbar);