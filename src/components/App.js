import React from 'react';
import SearchBar from './SearchBar';
import youtube from "../api/youtube";

const KEY = "AIzaSyCQFn1lBZgX50rQWr8Aw9-HUNhd4_CLpes";

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
      }
    })
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    )
  }
}

export default App;