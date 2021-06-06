import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import Matches from './components/Matches';
import SwipeButtons from './components/SwipeButtons'
import SplashPage from './components/SplashPage';

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Router>
        <div className="App">
        <Router>
          <Switch>
            <Route path="/matches">
              <Header />
              <Matches />
              <h1>I am the matches page</h1>
            </Route>
            <Route path="/tinder-cards">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
            <Route path="/">
              <Header />
              <SplashPage />
            </Route>
        </Switch>
        </Router>
        </div>
      </Router>

          {/*   Tinder Cards   */}
          {/*   Buttons below Tinder Cards  */}

          {/*   Chats screen   */}
          {/*   Individual Chat Screen   */}
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact={true}></Route>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true} >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true} >
            <h1>My Home Page</h1>
          </ProtectedRoute>
        </Switch>
      </Router>
    </>

  );
}

export default App;
