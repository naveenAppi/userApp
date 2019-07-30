import React, { Component } from 'react';
import { connect} from 'react-redux';
import { getProfiles} from '../../Actions/profileActions';
import Spinner from '../../Components/Common/Spinner';
import ProfilesItem from './ProfilesItem';

export class Profiles extends Component {
    componentDidMount() {
        this.props.getProfiles();
    }
    
    render() {
        const { profiles, loading } = this.props.profile;
         let profileItem;

        if (profiles === null || loading) {
            profileItem = <Spinner/>
        } else {
            if (profiles.length > 0) {
                profileItem = profiles.map((profile) => (
                    <ProfilesItem key={profile._id}
                    profile = {profile}
                    />
                ))
            } else {
                profileItem = <h4>There no Profiles Here</h4>
            }
        }

    return (
        <div className="dev-profiles">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="display-4 text-center">Developers Profiles</p>
                        <p className="lead text-muted text-center">Browes developer profiles and contact </p>
                        {profileItem}
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    profile:state.profile
});

export default connect(mapStateToProps , {getProfiles}) (Profiles);
