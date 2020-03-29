import React from "react";

import PostsGrid from "./PostsGrid";
import PostsList from "./PostsList";

import Pagination from "../../components/Pagination";
import LoadMore from "../../components/LoadMore";
import FilterBar from "../filter/FilterBar";

const Posts = () => {
  return (
    <>
      <FilterBar />
      <PostsGrid />
      <LoadMore />
      <Pagination />
    </>
  );
};

export default Posts;
