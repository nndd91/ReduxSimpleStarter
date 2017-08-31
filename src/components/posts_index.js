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
          <div className='panel panel-primary' key={post.id}>
            <div className='panel-heading'>
              {post.title}
            </div>
            <br /> {post.categories}
            <br /> {post.content}
          </div>
        )
      })
    )
  }
  render () {
    return (
      <div>
        Posts Index
        <Link to='/posts/new' className='btn btn-primary pull-right'>Add a Post</Link>
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
