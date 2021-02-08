import React from 'react';
import Post from './Post/Post'
import postService from '../../services/post-services'
import './Posts.css'

class Posts extends React.Component {
    state = {
        posts: null
    };

    componentDidMount() {
        postService.load().then(posts => {
            this.setState({ posts });
        })
    }

    render() {
        const { posts } = this.state;
        return posts ? <div className="Posts">
            {posts.map((post) => <Post key={post.id} imageUrl="/logo512.png" imageAlt="alt" author={post.userId} >{post.body}</Post>)}
        </div> : <div>Loading...</div>
    }
}

export default Posts;