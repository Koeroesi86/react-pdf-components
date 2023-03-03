import React from "react";
import PropTypes from "prop-types";

export interface FragmentComponentProps {
  node: string;
}

function Fragment({ node }: FragmentComponentProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{node}</>;
}

Fragment.propTypes = {
  node: PropTypes.string.isRequired,
};

export default Fragment;
