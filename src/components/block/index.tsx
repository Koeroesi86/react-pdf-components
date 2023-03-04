import React from "react";
import { View } from "@react-pdf/renderer";
import * as PropTypes from "prop-types";
import {
  ai,
  alignItems,
  fd,
  flexDirection,
  flexGrow,
  flexWrap,
  fw,
  jc,
  justifyContent,
  overflow,
  pos,
  position,
} from "@app-types";

export interface BlockComponentProps {
  position?: pos;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  id?: string;
  backgroundColor?: string;
  flexGrow?: number;
  flexDirection?: fd;
  justifyContent?: jc;
  alignItems?: ai;
  flexWrap?: fw;
  overflow?: "hidden";
  children?: React.ReactElement | React.ReactElement[];
}

function Block({ children, id, ...props }: BlockComponentProps) {
  return (
    <View id={id} style={props}>
      {children}
    </View>
  );
}

Block.propTypes = {
  /* eslint-disable react/require-default-props */
  position: PropTypes.oneOf(position),
  top: PropTypes.number,
  left: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  flexGrow: PropTypes.oneOf(flexGrow),
  flexDirection: PropTypes.oneOf(flexDirection),
  flexWrap: PropTypes.oneOf(flexWrap),
  justifyContent: PropTypes.oneOf(justifyContent),
  alignItems: PropTypes.oneOf(alignItems),
  overflow: PropTypes.oneOf(overflow),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

Block.defaultProps = {
  flexGrow: 0,
  flexWrap: "wrap",
}

export default Block;
