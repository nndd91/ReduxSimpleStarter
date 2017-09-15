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
          <Link to={`/posts/${post.id}`}>
            <div className='panel panel-default' key={post.id} style={{'border': '1px solid grey', 'borderRadius': '5px'}}>
              <div className='panel-heading'>
                <div className='panel-title'>
                  {post.title}
                </div>
              </div>
              <br /> {post.categories}
              <br /> {post.content}
            </div>
          </Link>
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
