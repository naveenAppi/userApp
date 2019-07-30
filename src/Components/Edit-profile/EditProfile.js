import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../Common/TextFieldGroup';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';
import SelectListGroup from '../Common/SelectListGroup';
import InputGroup from '../Common/InputGroup';
import {createNewProfile , getCurrentProfile} from '../../Actions/profileActions'
import { withRouter } from 'react-router-dom';
import isEmpty from '../../Validation/is_Empty';
import {Link} from 'react-router-dom'



class EditProfile extends Component {
    constructor() {
        super()
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            status: '',
            location: '',
            skills: '',
            website: '',
            githubusername: '',
            bio: '',
            youtube: '',
            facebook: '',
            twitter: '',
            instagram: '',
            linkedin: '',
            errors:{}
        }
    }

    onChangeHandle = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            status: this.state.status,
            location: this.state.location,
            skills: this.state.skills,
            website: this.state.website,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            youtube: this.state.youtube,
            facebook: this.state.facebook,
            twitter: this.state.twitter,
            instagram: this.state.instagram,
            linkedin: this.state.linkedin,
        }
        this.props.createNewProfile(profileData,
            this.props.history) 
    }


    componentDidMount() {
        this.props.getCurrentProfile();
    }
componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile) {
        const profile = nextProps.profile.profile
        const skillsCSV = profile.skills.join(',')
        profile.company = !isEmpty(profile.company) ? profile.company : '';
        profile.website = !isEmpty(profile.website) ? profile.website : '';
        profile.location = !isEmpty(profile.location) ? profile.location : '';
        profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
        profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
        profile.social = !isEmpty(profile.social) ? profile.social : {};
        profile.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
        profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
        profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';
        profile.linkedin = !isEmpty(profile.social.linkedin) ? profile.social.linkedin : '';
        profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
        profile.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
        
        this.setState({
            handle: profile.handle,
            company: profile.company,
            status: profile.status,
            location: profile.location,
            skills: skillsCSV,
            website: profile.website,
            githubusername: profile.githubusername,
            bio: profile.bio,
            youtube: profile.youtube,
            facebook: profile.facebook,
            twitter: profile.twitter,
            instagram: profile.instagram,
            linkedin: profile.linkedin,
})

    }
    if (nextProps.errors) {
        this.setState({
            errors:nextProps.errors
        })
    }
}


    render() {
        const {errors ,  displaySocialInputs } = this.state;

        let socilaInputs;
        if (displaySocialInputs) {
            socilaInputs = (
                <div>
                <InputGroup
                type="text"
                name="youtube"
                placeholder="YouTube Channel URL"
                value={this.state.youtube}
                onChange={this.onChangeHandle}
                icon="fab fa-youtube"
                error={errors.youtube}
                
            />
                    <InputGroup
                        type="text"
                        name="facebook"
                        placeholder="Facebook Profile URL"
                        value={this.state.facebook}
                        onChange={this.onChangeHandle}
                        icon="fab fa-facebook"
                        error={errors.facebook}
                        
                    />
                    <InputGroup
                    type="text"
                    name="twitter"
                    placeholder="Twitter Profile URL"
                    value={this.state.twitter}
                    onChange={this.onChangeHandle}
                    icon="fab fa-twitter"
                    error={errors.twitter}
                    
                    />
                    <InputGroup
                    type="text"
                    name="instagram"
                    placeholder="instagram profile URL"
                    value={this.state.instagram}
                    onChange={this.onChangeHandle}
                    icon="fab fa-instagram"
                    error={errors.instagram}
                    
                    />
                    <InputGroup
                    type="text"
                    name="linkedin"
                    placeholder="linkedin Profile URL"
                    value={this.state.linkedin}
                    onChange={this.onChangeHandle}
                    icon="fab fa-linkedin"
                    error={errors.linkedin}
                    
                />
                </div>
            );
        }




        const options = [
            {label:'Select Professional Status' , value:0},
            {label:'Developer' , value:'Developer'},
            {label:'Front-End-Developer' , value:'Front-End-Developer'},
            {label:'Back-End-Developer' , value:'Back-End-Developer'},
            {label:'Full-Stack-Developer' , value:'Full-Stack-Developer'},
            {label:'Junior-Developer' , value:'Junior-Developer'},
            {label:'Senior-Developer' , value:'Senior-Developer'},
            {label:'Designer' , value:'Designer'},
            {label:'Others' , value:'Others'}
        ]

    return (
        <div className="create-profile">
            <div className="container">
                <div className="row">
                <div className="col-md-8 m-auto">
                <Link to="/dashboard" className="btn btn-dark">Go Back</Link>
                        <h1 className="display-5 text-center">
                        Edit Your Profile
                        </h1>
                        <small className="d-block pb-3">* = required field</small>
                        <form onSubmit={this.onSubmitHandler}>
                            <TextFieldGroup
                                type="text"
                                name="handle"
                                placeholder="Profile Handle"
                                value={this.state.handle}
                                onChange={this.onChangeHandle}
                                error={errors.handle}
                                info="A unique handler name"
                            />
                            <SelectListGroup
                            type="text"
                            name="status"
                            options={options}
                            value={this.state.status}
                            onChange={this.onChangeHandle}
                                error={errors.status}
                                info="Select your status working field"
                            />
                            <TextFieldGroup
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={this.state.company}
                            onChange={this.onChangeHandle}
                                error={errors.company}
                                info="add your company name"
                            />
                            <TextFieldGroup
                            type="text"
                            name="website"
                            placeholder="WebSite-www.companywebsiteURL.com"
                            value={this.state.website}
                            onChange={this.onChangeHandle}
                                error={errors.website}
                                info="add your company Website"
                            />
                            <TextFieldGroup
                            type="text"
                            name="location"
                            placeholder="location"
                            value={this.state.location}
                            onChange={this.onChangeHandle}
                                error={errors.location}
                                info="add your location"
                            />
                            <TextFieldGroup
                            type="text"
                            name="skills"
                            placeholder="Skills"
                            value={this.state.skills}
                            onChange={this.onChangeHandle}
                                error={errors.skills}
                                info="add your skills sets"
                            />
                            <TextFieldGroup
                            type="text"
                            name="githubusername"
                            placeholder="GitHub Profile Name"
                            value={this.state.githubusername}
                            onChange={this.onChangeHandle}
                                error={errors.githubusername}
                                info="add your githubusername"
                            />
                            <TextAreaFieldGroup
                                name="bio"
                                placeholder="A short bio of yours"
                                value={this.state.bio}
                                onChange={this.onChangeHandle}
                                info="Write your bio here 300 character"
                            />
                            <div className="mb-3">
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() => {
                                        this.setState((prevState) => ({
                                      displaySocialInputs : !prevState.displaySocialInputs
                                        }))
                                    }}
                                >
                                Add Social NetWork Links
                                </button>
                                <span className="text-muted">Optional</span>
                            </div>
                            {socilaInputs}
                            <button type="submit" value="Submit"
                                className="btn btn-info btn-block mt-4"
                            >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        profile:state.profile,
        errors:state.errors
    }
}
export default connect(mapStateToProps , {createNewProfile , getCurrentProfile}) (withRouter(EditProfile));
