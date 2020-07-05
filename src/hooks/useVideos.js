import { useState, useEffect } from 'react';
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const KEY = "AIzaSyCQFn1lBZgX50rQWr8Aw9-HUNhd4_CLpes";

  useEffect(() => {
    search(defaultSearchTerm) ;
  }, []);

  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
      }
    });

    setVideos(response.data.items);
  }

  return [ videos, search ];
}

export default useVideos;
