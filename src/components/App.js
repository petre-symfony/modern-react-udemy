import React from 'react';
import SearchBar from './SearchBar';
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyCQFn1lBZgX50rQWr8Aw9-HUNhd4_CLpes";

class App extends React.Component {
  state = { videos: [], selectedVideo: null  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
      }
    });

    this.setState({videos: response.data.items});
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;