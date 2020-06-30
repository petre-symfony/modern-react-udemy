//Import the react and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from "./CommentDetail";

//Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM"/>
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM"/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM"/>
    </div>
  );

}
//Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)