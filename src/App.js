import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import GoogleSignin from "./pages/GoogleSignin";
import ProfilePage from "./pages/ProfilePage";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createProfileDocument } from "./firebase/firebase.utils";
import NotFound from "./pages/NotFound";

import userData from "./userData";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [feedData, setFeedData] = useState(userData);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <CssBaseline />
      <Header currentUser={currentUser} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <HomePage
                {...props}
                feedData={feedData}
                currentUser={currentUser}
              />
            );
          }}
        />

        <Route
          exact
          path="/login-google"
          render={props =>
            currentUser ? <Redirect to="/" /> : <GoogleSignin {...props} />
          }
        />
        <Route
          exact
          path="/login"
          render={props =>
            currentUser ? <Redirect to="/" /> : <SigninPage {...props} />
          }
        />
        <Route
          exact
          path="/signup"
          render={props =>
            currentUser ? <Redirect to="/" /> : <SignupPage {...props} />
          }
        />
        <Route
          exact
          path="/profile/:name"
          render={props =>
            !currentUser ? (
              <Redirect to="/" />
            ) : (
              <ProfilePage {...props} currentUser={currentUser} />
            )
          }
        />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
};

export default App;
