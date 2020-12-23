import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideMenu from "./container/sideMenu.js";
import Main from "./container/main.js";

function App() {
  return (
    <div className="App">
      <Router>
        <SideMenu />
        <Main />
      </Router>
    </div>
  );
}

export default App;
