import React, { Component } from 'react'
import { fetchPost } from '../actions'
import { connect } from 'react-redux'

class PostsShow extends Component {
  componentDidMount () {
    this.props.match.params.id
    this.props.fetchPost(this.props.id)
  }

  render () {
    return (
      <div>
        Posts Show!
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    
  }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
