import React from "react";
import { removeFavorite } from "../../redux/actions/favorites";
import { useStore } from "react-redux";

const FavoritesItem = (props) => {
  const { dispatch, state } = useStore();

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
            dispatch(removeFavorite(props.id));
          }}
        />
      </td>
    </tr>
  );
};

export default FavoritesItem;
