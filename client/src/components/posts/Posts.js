import React, { useState, useReducer } from "react";

import { usePosts } from "../../hooks/usePosts";

import LoadMoreButton from "./LoadMoreButton";
import ControlPanel from "../controlPanel/ControlPanel";
import PostsList from "./PostsList";
import PostsGrid from "./PostsGrid";
import Pagination from "../pagination/Pagination";
import MainLoader from "../MainLoader";
import { PostsContext, GridContext } from "../../shared/context";

import { sortBy, baseUrlPosts } from "../../shared/app-constants";
import { paramsReducer } from "../../shared/paramsReducer";

import { useDispatch } from "react-redux";
import { favorites } from "../../redux/reducers";

const initialParams = {
  q: "",
  _limit: 6,
  _sort: sortBy,
  _page: 1,
  _order: "asc",
  _start: "",
  _end: "",
};

const Posts = () => {
  const [requestParams, dispatchRequestParams] = useReducer(
    paramsReducer,
    initialParams
  );

  let { posts, numberOfPosts, loading } = usePosts(baseUrlPosts, requestParams);
  numberOfPosts = +numberOfPosts;

  const [gridMode, setGridMode] = useState(true);

  const dispatch = useDispatch();

  const handleHeartClick = (e, post, active) => {
    e.preventDefault();
    if (active) {
      dispatch(favorites.actions.removeFavorite({ id: post.id }));
      return;
    }

    dispatch(favorites.actions.addFavorite({ id: post.id, title: post.title }));
  };

  return (
    <PostsContext.Provider
      value={{
        requestParams,
        dispatchRequestParams,
        posts,
        numberOfPosts,
        loading,
        gridMode,
        setGridMode,
      }}
    >
      <main className="uk-main">
        <div className="uk-section">
          <div className="uk-container">
            <GridContext.Provider value={{ gridMode, setGridMode }}>
              <ControlPanel />
            </GridContext.Provider>

            {gridMode && (
              <PostsGrid posts={posts} handleHeartClick={handleHeartClick} />
            )}
            {!gridMode && (
              <PostsList posts={posts} handleHeartClick={handleHeartClick} />
            )}

            {!!numberOfPosts && <LoadMoreButton />}
            {!!numberOfPosts && <Pagination />}
          </div>
        </div>
      </main>
      {loading && <MainLoader />}
    </PostsContext.Provider>
  );
};

export default Posts;
