import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedIn ? (
          <div
            style={{
              maxWidth: 890,
              width: "100%",
              margin: "0 auto",
              marginTop: 80,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Route path="/" exact>
              <Home userObj={userObj} />
            </Route>
            <Route path="/profile" exact>
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </div>
        ) : (
          <>
            <Router path="/" exact>
              <Auth />
            </Router>
          </>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;
