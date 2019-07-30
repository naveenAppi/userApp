import React, { Component } from 'react';
import {connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLikes, removeLikes } from '../../Actions/postActions';



export class PostItems extends Component {
    deletePost = (id) => {
        this.props.deletePost(id);
    }
    addLikes = (id) => {
        this.props.addLikes(id);
       
    }
    removeLikes = (id) => {
        this.props.removeLikes(id); 
      
    }

    findUserLikes(likes) {
        const { auth } = this.props;
        if (likes.filter(like => like.user === auth.user.id).length > 0) {
            return true;
        } else {
            return false
        }
        
    }

    render() {
        const { auth, post , showActions } = this.props
        return (
            <div className="card card-body mb-3" >
                <div className="row" >
                    <div className="col-md-2">
                        <Link to={`/profile/${post.name}`}>
                            <img
                                className="rounded-circle d-none d-md-block"
                                src={post.avatar}
                                alt=""
                               
                            />
                        </Link>
                        <br />
                        <h4 className="text-center">{post.name}</h4>
                    </div>
                    <div className="col-md-10">
                        <p className="lead">{post.text}</p>
    
                        {showActions ? <span>
                            <button
                            onClick={this.addLikes.bind(this , post._id)}
                                    type="button"
                                    className="btn btn-light mr-1"
                                >
                                    <i
                                        className={classnames('fas fa-thumbs-up', {
                                            'text-info':this.findUserLikes(post.likes)
                                    })}
                                    />
                                    <span className="badge badge-light">{post.likes.length}</span>
                                </button>
                                <button
                                onClick={this.removeLikes.bind(this , post._id)}
                                    type="button"
                                    className="btn btn-light mr-1"
                                >
                                    <i className="text-secondary fas fa-thumbs-down" />
                                </button>
                                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                                    Comments
                                </Link>
    
                                {post.user === auth.user.id ? <button
                                    onClick={this.deletePost.bind(this, post._id)}
                                    type="button"
                                    className="btn btn-danger"
                                ><i className="fas fa-times"/></button> : null}
               
                        </span> : null}
                        
                           
                        
      
                    </div>
                </div>
            </div>
        )
  
    }
}

PostItems.defaultProps = {
    showActions:true
}

const mapStateToProps = state => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps , {deletePost , addLikes , removeLikes }) (PostItems);
