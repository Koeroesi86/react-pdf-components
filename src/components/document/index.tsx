import React from "react";
import { Document as ReactDocument } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface DocumentComponentProps {
  title?: string;
  author?: string;
  keywords?: string;
}

const Document: React.FC<DocumentComponentProps> = ({
  // eslint-disable-next-line react/prop-types
  children,
  title,
  author,
  keywords,
}) => (
  <ReactDocument title={title} author={author} keywords={keywords}>
    {children}
  </ReactDocument>
);

Document.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.string,
};

Document.defaultProps = {
  title: "",
  author: "",
  keywords: "",
};

export default Document;
