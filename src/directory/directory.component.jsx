import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../redux/directory/directory.selector";

import "./directory.styles.scss";
import MenuItem from "../components/menu-item/menu-item.component";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections
        ? sections.map(({ id, ...anotherProps }) => (
            <MenuItem key={id} {...anotherProps} />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
