import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render(){
    return (
      <div>User Header</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);

