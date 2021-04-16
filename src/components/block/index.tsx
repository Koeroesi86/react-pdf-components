import React from "react";
import { View } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import {
  ai,
  alignItems,
  fd,
  flexDirection,
  flexGrow,
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
  overflow?: "hidden";
}

// eslint-disable-next-line react/prop-types
const Block: React.FC<BlockComponentProps> = ({ children, ...props }) => (
  <View
    id={props.id}
    style={{
      position: props.position,
      width: props.width,
      height: props.height,
      backgroundColor: props.backgroundColor,
      flexGrow: props.flexGrow || 0,
      flexDirection: props.flexDirection,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
      overflow: props.overflow,
      flexWrap: "wrap",
    }}
  >
    {children}
  </View>
);

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
  justifyContent: PropTypes.oneOf(justifyContent),
  alignItems: PropTypes.oneOf(alignItems),
  overflow: PropTypes.oneOf(overflow),
};

export default Block;
