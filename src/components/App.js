import React, { useState, useEffect } from 'react';
import SearchBarFunctionalComponent from './SearchBarFunctionalComponent';
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [ selectedVideo, setSelectedVideo ] = useState(null);
  const [ videos, search ] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]) ;
  }, [ videos ]);

  return (
    <div className="ui container">
      <SearchBarFunctionalComponent onFormSubmit={ search } />
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