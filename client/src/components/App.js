import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>PageOne
    BAD!!!
    <a href="/pagetwo">Navigate to page two</a>
  </div>
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
      BAD!!
      <a href="/">Navigate to page two</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne}/>
        <Route path="/pagetwo" component={PageTwo}/>
      </BrowserRouter>
    </div>
  )
}

export default App;