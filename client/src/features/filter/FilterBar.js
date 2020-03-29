import React from "react";

import Icon from "../../components/Icon";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Search from "../../components/Search";

const FilterBar = () => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <div className="uk-width-medium uk-margin-remove uk-margin-right">
        <Search />
      </div>
      <Select
        className="uk-width-small uk-margin-auto-left"
        defaultValue="asc"
        options={[
          { value: "asc", label: "ASC" },
          { value: "desc", label: "DESC" }
        ]}
      />
      <Select
        className="uk-width-small uk-margin-auto-left"
        defaultValue={6}
        options={[
          { value: 6, label: "6" },
          { value: 12, label: "12" },
          { value: 24, label: "24" }
        ]}
      />
      <div className="uk-button-group uk-margin-left">
        <Button color="default" active>
          <Icon icon="grid" />
        </Button>
        <Button color="default">
          <Icon icon="list" />
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
