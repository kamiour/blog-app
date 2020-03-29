import React from "react";
import PostGrid from "./PostGrid";

const PostsGrid = () => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      <div>
        <PostGrid />
      </div>
      <div>
        <PostGrid />
      </div>
      <div>
        <PostGrid />
      </div>
      <div>
        <PostGrid />
      </div>
      <div>
        <PostGrid />
      </div>
      <div>
        <PostGrid />
      </div>
    </div>
  );
};

export default PostsGrid;
