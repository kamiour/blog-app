import React from "react";

import Icon from "../../components/Icon";
import Button from "../../components/Button";

const Favorites = () => {
  return (
    <>
      <Button className="uk-icon">
        <Icon icon="heart" ratio={2} />
      </Button>
      <div className="uk-width-large" data-uk-dropdown="mode: click">
        <div className="uk-dropdown-grid uk-child-width-1-1@m" data-uk-grid>
          <div>
            <table className="uk-table uk-table-divider uk-table-justify">
              <thead>
                <tr>
                  <th>Title</th>
                  <th className="uk-text-right">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Title 1</td>
                  <td className="uk-text-right">
                    <Button>
                      <Icon icon="close" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Title 2</td>
                  <td className="uk-text-right">
                    <Button>
                      <Icon icon="close" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
