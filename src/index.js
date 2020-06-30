//Import the react and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Nice blog post!"
          avatarImage={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          comment="Very fine post!"
          avatarImage={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          comment="Intriguing allegation!"
          avatarImage={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );

}
//Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)