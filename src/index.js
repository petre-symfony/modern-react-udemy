import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);

    //THIS IS THE ONLY TIME we do direct assignment
    //to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //we called setState
        this.setState({ lat: position.coords.latitude })
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  componentDidMount() {
    console.log('My component was rendered to the screen!')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('My component was just updated - it rerendered!')
  }

  //React says we have to define render
  render(){
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>
    }

    if (!this.state.errorMessage && !this.state.lat){
      return <div>Loading...</div>
    }
  }
}
ReactDom.render(
  <App />,
  document.querySelector('#root')
);