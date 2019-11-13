import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './utils/ProtectedRoute'
import Login from "./components/Login";
import "./styles.scss";
import BubblesPage from './components/BubblePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/bubbles" component={BubblesPage}/>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
