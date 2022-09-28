import React from "react";
import MyApi from "./components/MyApi"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <h1>This is a Header</h1>
      <MyApi />
      <h3>This is a footer</h3>
    </div>
  )
}

export default App;