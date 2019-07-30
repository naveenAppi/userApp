import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../../Actions/authActions'  
import TextFieldGroup from '../Common/TextFieldGroup';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
        
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
        
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
        const userData = {
            email:this.state.email,
            password:this.state.password
        }
        this.props.loginUser(userData);
    }

    render() {

        const {errors} = this.state

        return (
            <div className="container" style={{height:"69.5vh"}}>
            <div className="row">
            <div className="col-md-8 offset-md-2" style={{marginTop:'75px'}}>
                    <h1 className="display-8 text-center">Sign-In</h1>
                    <p className="lead text-center">
                    Login devConnector User Account
                    </p>
                    <div className="col-md-8 offset-md-2">
                            <form onSubmit={this.onSubmitHandler}>
                                <TextFieldGroup
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeHandler}
                                    error={errors.email}
                                />
                                <TextFieldGroup
                                    type="text"
                                    name="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.onChangeHandler}
                                    error={errors.password}
                                />                          
                            <button style={{width:"100%"}}
                                type="submit"
                                    className="btn btn-outline-success"
                            >Login</button>
                    </form>
                    </div>
            </div>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors:state.errors
});

export default connect(mapStateToProps , { loginUser }) (Login);