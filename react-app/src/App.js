import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import Matches from './components/Matches';
import SwipeButtons from './components/SwipeButtons'
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
import Footer from './components/Footer';
import SplashPage from './components/SplashPage';
import Chat from './components/Chat';
import Channel from './components/Channel';

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
        <div className="App">
        <Router>
          <Switch>
            <Route path="/matches">
              <Header />
              <Matches />
              <Footer />
            </Route>
            <Route path = "/messages/:id">
              <Header />
              <Channel />
            </Route>
            <Route path="/tinder-cards">
              <Header />
              <TinderCards />
              <Footer />
            </Route>
            <Route path='/profile'>
              <Header />
              <Profile />
              <Footer />
            </Route>
            <Route path="/login">
              <LoginPage />
              <Footer />
            </Route>
            <Route path="/">
              <SplashPage />
              <Footer />
            </Route>
        </Switch>
        </Router>
        </div>


      {/* <Router>
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
      </Router> */}
    </>

  );
}

export default App;
