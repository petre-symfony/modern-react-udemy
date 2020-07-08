import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '51559664985-pvakpp471vu10d5a8hl0vvlirkktkfhc.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null){
      return null
    } else if (this,this.state.isSignedIn) {
      return (
        <button onClick={ this.onSignOutClick } className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={ this.onSignInClick } className="ui red google button">
          <i className="google icon"></i>
          Sign In with Google
        </button>
      )
    }
  }

  render(){
    return (
      <div>{ this.renderAuthButton() }</div>
    )
  }
}

export default GoogleAuth;