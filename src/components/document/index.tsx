import React from "react";
import { Document as ReactDocument } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface DocumentComponentProps {
  title?: string;
  author?: string;
  keywords?: string;
  children?: React.ReactElement,
}

function Document({
  children, title, author, keywords,
}: DocumentComponentProps) {
  return (
    <ReactDocument title={title} author={author} keywords={keywords}>
      {children}
    </ReactDocument>
  );
}

Document.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.string,
  children: PropTypes.node,
};

Document.defaultProps = {
  title: "",
  author: "",
  keywords: "",
  children: null,
};

export default Document;
