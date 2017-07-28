import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = process.env.YT_API_KEY


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      console.log(videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    return (
      <div>
        <div>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} />
        </div>


      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
