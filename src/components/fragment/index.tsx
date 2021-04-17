import React from "react";
import PropTypes from "prop-types";

export interface FragmentComponentProps {
  node: string;
}

const Fragment: React.FC<FragmentComponentProps> = ({ node }) => <>{node}</>;

Fragment.propTypes = {
  node: PropTypes.string.isRequired,
};

export default Fragment;
