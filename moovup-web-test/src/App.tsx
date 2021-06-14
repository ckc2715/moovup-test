import React from "react";
import { Header } from "./components/Header";
import { FindMyFriend } from "./pages/FindMyFriend";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <FindMyFriend />
    </div>
  );
}

export default App;
