import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {
  return <div>StreamEdit</div>
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { stream: null }
}

export default connect(
  mapStateToProps
)(StreamEdit);