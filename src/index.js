//Import the react and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from "./CommentDetail";

//Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail/>
      <CommentDetail/>
      <CommentDetail/>
    </div>
  );

}
//Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)