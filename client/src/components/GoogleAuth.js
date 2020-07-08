import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '51559664985-pvakpp471vu10d5a8hl0vvlirkktkfhc.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
      })
    });
  }

  render(){
    return (
      <div>Google Auth</div>
    )
  }
}

export default GoogleAuth;