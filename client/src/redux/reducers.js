import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export const favorites = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.title,
      },
    ],
    removeFavorite: (state, action) =>
      state.filter((item) => item.id !== action.payload.id),
  },
});

const rootReducer = combineReducers({
  favorites: favorites.reducer,
});

export default rootReducer;
