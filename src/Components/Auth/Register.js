import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'
import { connect} from 'react-redux';
import { registerUser } from '../../Actions/authActions';
import TextFieldGroup from '../Common/TextFieldGroup';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors:{}
        }
    }
 

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors:nextProps.errors
            })
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2 
        }
        this.props.registerUser(newUser,
            this.props.history) 
    }
    


    render() {

        const { errors } = this.state;
        
        return (
            <div className="container" style={{height:"69.5vh"}}>
                <div className="row">
                <div className="col-md-8 offset-md-2">
                        <h1 className="display-8 text-center">Sign-Up</h1>
                        <p className="lead text-center">
                        Create a devConnector User Account
                        </p>
                        <div className="col-md-8 offset-md-2">
                        <form onSubmit={this.onSubmitHandler}>
                                <TextFieldGroup
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.onChangeHandler}
                                    error={errors.name}
                                />
                                <TextFieldGroup
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                error={errors.email}
                            />
                            <TextFieldGroup
                                type="text"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                error={errors.password}
                            /> 
                                <TextFieldGroup
                                    name="password2"
                                    type="text"
                                    placeholder="Confirm Password"
                                    value={this.state.password2}
                                    onChange={this.onChangeHandler}
                                    error={errors.password2}
                                />
                                
                                <button style={{width:"100%"}}
                                    type="submit"
                                    className="btn btn-outline-success"
                                >Submit</button>
                        </form>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        errors:state.errors
    }
}

export default connect(mapStateToProps , {registerUser}) (withRouter(Register));