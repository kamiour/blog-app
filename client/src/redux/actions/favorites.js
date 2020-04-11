// action types:
export const ADD_FAVORITE = "addFavorite";
export const REMOVE_FAVORITE = "removeFavorite";

// action creators:
export const addFavorite = (id, title) => {
  return {
    type: ADD_FAVORITE,
    id,
    title,
  };
};

export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    id,
  };
};
