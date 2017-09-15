import React, { Component } from 'react'
import { fetchPost } from '../actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PostsShow extends Component {
  componentDidMount () {
    // Get the id from URL. match function is provided by react router that get the :id from the url.
    const { id } = this.props.match.params.id
    this.props.fetchPost(id)
  }

  render () {
    const { post } = this.props

    if (!post) {
      return <div>Loading</div>
    }

    return (
      <div>
        <Link className='btn btn-default' to='/'>Back To Index</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

// Normally is pass in state, but this case we just want the post object so we can do destructuring
// mapStateToProps
// first argument is state, second arguement is
function mapStateToProps ({ posts }, ownProps) {
  // Normal way is just to return posts
  // return { posts }
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
