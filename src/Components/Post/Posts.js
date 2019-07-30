import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Spinner from '../Common/Spinner'
import { getPost } from '../../Actions/postActions';
import PostFeed from './PostFeed';
 
export class Posts extends Component {


componentDidMount() {
    this.props.getPost();
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.post.posts === null && this.props.post.loading) {
          this.props.history.push('/Not-Found');
        }
      }
    


    render() {
        const { posts, loading } = this.props.post;
        let postContent;
        if (posts === null && loading) {
            postContent = <Spinner/>
        } else {
            postContent = <PostFeed posts={posts}/>
        }
            
    return (
      <div className="feed">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {postContent}
                    <PostForm/>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    post:state.post
})

export default connect(mapStateToProps , {getPost}) (Posts);
