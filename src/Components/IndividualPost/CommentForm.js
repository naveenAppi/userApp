import React, { Component } from 'react';
import {connect } from 'react-redux';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';
import {addComment} from '../../Actions/postActions';

export class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            errors:{}
        }
    }

    onChangeHandle = (e) => {
        this.setState({
        [e.target.name] : (e.target.value)
    })
    }
    onSubmitHandler = e => {
        e.preventDefault();
        const { user } = this.props.auth
        const {postId} = this.props
        const commentData = {
            text: this.state.text,
            name: user.name,
            avatar:user.avatar   
        }
        this.props.addComment(postId ,commentData);
        this.setState({ text: '' });
    }


    render() {
      
        const {errors} = this.props

    return (
        <div className="post-form mb-3">
            <div className="card card-info">
                <div className="card-header bg-info text-white">
                Write your Comment
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmitHandler}>
                    <TextAreaFieldGroup
                        name="text"
                        placeholder="Replay Here....."
                        value={this.state.text}
                        onChange={this.onChangeHandle}
                        error={errors.text}
                    />
                    <button className="btn btn-dark" type="submit">Submit</button>
                    </form>
                    
                </div>
            </div>
        
      </div>
    )
  }
}
const mapStateToProps = state => ({
    errors: state.errors,
    post: state.post,
    auth:state.auth
})

export default connect(mapStateToProps , {addComment})(CommentForm);
