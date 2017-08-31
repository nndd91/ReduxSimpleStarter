import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }
  renderPosts () {
    return (
      _.map(this.props.posts, (post) => {
        return (
          <div>
            {post.title}
            {post.category}
          </div>
        )
      })
    )
  }
  render () {
    return (
      <div>
        Posts Index
        <Link to='/new' className='btn btn-primary pull-right'>Add a Post</Link>
        {this.renderPosts()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
