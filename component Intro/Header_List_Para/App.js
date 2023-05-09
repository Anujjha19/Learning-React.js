import React from "react";

import Header from "./component/Header_List_Para/Header";
import Para from './component/Header_List_Para/Para'
import List from "./component/Header_List_Para/List";

function App() {
  return (
    <>
      {/* <h1>My name is Anuj </h1> */}<Header />
      {/* <p> List is Below : </p> */} <Para />
      {/* <ol>
      <li> C++ DSA </li>
      <li> React.js </li>
      <li> JavaScript </li>
      <li> BackEnd </li>
    </ol> */}
      <List />

    </>
  )
}  

export default App;