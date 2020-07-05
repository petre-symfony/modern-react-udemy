import React, { useState, useEffect } from 'react';
import SearchBarFunctionalComponent from './SearchBarFunctionalComponent';
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyCQFn1lBZgX50rQWr8Aw9-HUNhd4_CLpes";

const App = () => {
  const [ selectedVideo, setSelectedVideo ] = useState(null);
  //setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBarFunctionalComponent onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;