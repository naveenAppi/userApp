import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TextFieldGroup from '../Common/TextFieldGroup';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';
import { addEducation } from '../../Actions/profileActions';

class AddEducation extends Component {
    constructor() {
        super();
        this.state = {
            school: '',
            degree: '',
            fieldofstudy:'',
            from: '',
            to: '',
            current: false,
            disabled: false,
            description: '',
            errors:{}
        }
    }
  onChangeHandler = (e) => {
      this.setState({
         [e.target.name] : e.target.value
     })
 }
    onSubmitHandler = (e) => {
        e.preventDefault();
        const userData = {
            school: this.state.school,
            degree: this.state.degree,
            fieldofstudy:this.state.fieldofstudy,
            from: this.state.from,
            to: this.state.to,
            description: this.state.description,
        }
    this.props.addEducation(userData , this.props.history)
    }
    onCheck = (e) => {
        this.setState({
            disabled: !this.state.disabled,
            current:!this.state.current
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors:nextProps.errors
            })
        }
    }
    


    render() {
        const { errors } = this.state;
    return (
        <div className="add-experince">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/dashboard" className="btn btn-dark">Go Back</Link>
                        <h1 className="display-5 text-center">Add Educational Details</h1>
                        <p className="lead text-center">add your education details present</p>
                        <div className="col-md-9 m-auto">
                        <small className="d-block pb-3">*=required all fields</small>
                        <form onSubmit={this.onSubmitHandler}>
                            <TextFieldGroup
                                name="school"
                                placeholder="school"
                                value={this.state.school}
                                onChange={this.onChangeHandler}
                                error={errors.school}
                            />
                            <TextFieldGroup
                            name="degree"
                            placeholder="degree"
                            value={this.state.degree}
                            onChange={this.onChangeHandler}
                            error={errors.degree}
                            />
                            <TextFieldGroup
                            name="fieldofstudy"
                            placeholder="field-of-study"
                            value={this.state.fieldofstudy}
                            onChange={this.onChangeHandler}
                            error={errors.fieldofstudy}
                                />
                                <h6>From Date</h6>
                                <TextFieldGroup
                                name="from"
                                type="date"
                                value={this.state.from}
                                onChange={this.onChangeHandler}
                                error={errors.from}
                                />
                                <h6>To Date</h6>
                                <TextFieldGroup
                                name="to"
                                type="date"
                                value={this.state.to}
                                onChange={this.onChangeHandler}
                                    error={errors.to}
                                    disabled={this.state.disabled ? 'disabled':''}
                                />
                                
                                <div className="form-check mb-4">
                                    <input
                                        type="checkbox"
                                        name="current"
                                        className="form-check-input"
                                        value={this.state.current}
                                        checked={this.state.current}
                                        onChange={this.onCheck}
                                        id="current"
                                    />
                                    <label htmlFor="current" className="form-check-label">
                                    Current
                                    </label>
                                </div>
                                <TextAreaFieldGroup
                                    name="description"
                                    type="textarea"
                                    value={this.state.description}
                                    onChange={this.onChangeHandler}
                                    error={errors.description}
                                    placeholder="Job Description"
                                    info="Tell about your Handling fields"
                                />
                                <button className="btn btn-info btn-block mt-4">
                                    Add Experince
                                </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        profile: state.profile,
        errors:state.errors
    }
}

export default connect(mapStateToProps, {addEducation}) (withRouter(AddEducation));
