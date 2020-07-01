import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
  state = { images: [] }

  async onSearchSubmit(term){
    const response = await Axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 0j-YnZAy1HXViDwiLun2SGOGzvwFHGHLpaGvCQ-30JI'
      }
    });

    console.log(this);
    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found {this.state.images.length} images
      </div>
    )
  }
}

export default App;