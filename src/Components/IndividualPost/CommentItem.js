import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../Actions/postActions';

export class CommentItem extends Component {


    deleteComment(postId ,commentId) {
       this.props.deleteComment(postId , commentId) 
    }


    render() {
      const {comment , postId , auth} = this.props
    return (
        <div className="comment">
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-2">
                        <img src={comment.avatar} className="rounded-circle d-none d-md-block" alt="" />
                        <br />
                        <p className="text-center">{comment.name}</p>
                    </div>
                    <div className="col-md-10">
                        <p className="lead">
                        {comment.text}
                        </p>
                        {comment.user === auth.user.id ? <button
                            onClick={this.deleteComment.bind(this, postId , comment._id)}
                            type="button"
                            className="btn btn-danger"
                        ><i className="fas fa-times"/></button> : null}
                    </div>
                </div>
            </div>      
        
      </div>
    )
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
    post: state.post,
    
})

export default  connect(mapStateToProps , {deleteComment})(CommentItem);
