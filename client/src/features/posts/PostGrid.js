import React from "react";

import Button from "../../components/Button";
import Favorite from "../favorite/Favorite";

const PostGrid = () => {
  return (
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          Title <Favorite />
        </h3>
      </div>
      <div className="uk-card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="uk-card-footer">
        <Button href="/" color="text">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default PostGrid;
