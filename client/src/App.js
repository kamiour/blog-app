import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Posts from "./components/posts/Posts";
import Albums from "./components/Albums";
import Navbar from "./components/navbar/Navbar";
import PostPage from "./components/postPage/PostPage";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/posts" />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
          <Route path="/posts/:id">
            <PostPage />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
