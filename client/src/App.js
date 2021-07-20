import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import firebase from "./firebase";
import Login from "./components/Auth/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Auth/Register";

const App = () => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <Router>
      {user ? (
        <>
          <Route path="/join" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </>
      ) : (
        <>
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
        </>
      )}
    </Router>
  );
};

export default App;
