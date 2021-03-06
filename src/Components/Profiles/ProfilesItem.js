import React, { Component } from 'react';
import isEmpty from '../../Validation/is_Empty';
import { Link } from 'react-router-dom';

export class ProfilesItem extends Component {
    render() {
      const {profile} = this.props
    return (
        <div className="card card-body bg-light mb-3">
            <div className="row">
                <div className="col-2">
                <img src={profile.user.avatar} alt="" className="rounded-circle"/>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                    <h3>{profile.user.name}</h3>
                    <p>
                        {profile.status} {isEmpty(profile.company) ? null : <span>At {profile.company}</span>}
                    </p>
                    <p>{isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}</p>
                    <Link to={`/profile/${profile.handle}`} className="btn btn-info">
                    ViewProfile
                    </Link>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <h4>Skill Sets</h4>
                   
                    <ul className="list-group">
                        {profile.skills.splice(0, 4).map((skill , index) => (
                            <li key={index} className="list-group-item">
                                <i className="fa fa-check pr-1" />
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
      </div>
    )
  }
}

export default ProfilesItem
