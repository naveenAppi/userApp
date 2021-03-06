import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {connect } from 'react-redux';
import {getCurrentProfile , deleteProfileAccount } from '../../Actions/profileActions';
import Spinner from '../Common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education  from './Education';

class Dashboard extends Component {
     

    componentDidMount() {
        this.props.getCurrentProfile();
    }
    deleteAccHandler = (e) => {
        this.props.deleteProfileAccount();  
    }

    render() {
      
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let dashboardContent;
        if (profile === null || loading) {
            dashboardContent = <Spinner/>
        } else {
            if (Object.keys(profile).length > 0) {
                dashboardContent = (
                    <div>
                        <p className="lead text-muted">Welcome
                        <Link to={`/profile/${profile.handle}`}>
                        {user.name}
                            </Link></p>
                        <ProfileActions />
                        <Experience experience={profile.experience} />
                        <Education education={profile.education}/>
                        <div style={{marginBottom:"60px"}}>
                        <button className="btn btn-danger" onClick={this.deleteAccHandler}>Delete Account</button>
                        </div>
                    </div>
                );
            } else {
                dashboardContent = (
                    <div className="container">
                        <p className="lead text-muted">Welcome {user.name}</p>
                        <p className="text-muted">you have not yet setup a profile , please add same info</p>
                        <Link to="/create-profile" className="btn btn-outline-info btn-lg">
                        Create Profile
                        </Link>
                    </div>
                );
           }
        }


    return (
      <div className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="display-5">
                        {dashboardContent}
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth:state.auth 
})

export default connect(mapStateToProps , {getCurrentProfile , deleteProfileAccount}) (Dashboard);