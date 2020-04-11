import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favorites";
import { combineReducers } from "redux";

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        },
      ];
    case REMOVE_FAVORITE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

/* Other reducers to be added here, and to combineReducers function below */

const rootReducer = combineReducers({ favorites: favoritesReducer });

export default rootReducer;
