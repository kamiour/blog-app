import React from "react";
import PostList from "./PostList";

const PostsList = () => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      <div>
        <PostList />
      </div>
      <div>
        <PostList />
      </div>
      <div>
        <PostList />
      </div>
      <div>
        <PostList />
      </div>
      <div>
        <PostList />
      </div>
      <div>
        <PostList />
      </div>
    </div>
  );
};

export default PostsList;
