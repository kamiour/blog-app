import React from "react";
import { useDispatch } from "react-redux";
import { favorites } from "../../redux/reducers";

const FavoritesItem = (props) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{props.title}</td>
      <td className="uk-text-right">
        <button
          className="uk-button"
          type="button"
          uk-icon="icon: close;"
          onClick={(event) => {
            event.preventDefault();
            dispatch(favorites.actions.removeFavorite({ id: props.id }));
          }}
        />
      </td>
    </tr>
  );
};

export default FavoritesItem;
