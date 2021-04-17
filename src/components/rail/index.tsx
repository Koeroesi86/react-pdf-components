import React from "react";
import PropTypes from "prop-types";
import Block from "../block";
import IconRing from "../icon-ring";

type Size = number | "grow";
type Orientation = "row" | "column";

export interface RailComponentProps {
  size?: number;
  iconSize?: number;
  color?: string;
  startSize?: Size;
  endSize?: Size;
  orientation?: "row" | "column";
}

const parseSize = (size: Size, prop: "width" | "height") =>
  size === "grow" ? { flexGrow: 1 } : { [prop]: size };
const getSizes = (size: Size, orientation: Orientation) =>
  orientation === "column"
    ? { width: 2, ...parseSize(size, "height") }
    : { height: 2, ...parseSize(size, "width") };

const Rail: React.FC<RailComponentProps> = ({
  size,
  iconSize,
  color,
  startSize,
  endSize,
  orientation,
}) => (
  <Block
    flexDirection={orientation}
    alignItems="center"
    {...(orientation === "column" ? { width: size } : { height: size })}
  >
    <Block backgroundColor={color} {...getSizes(startSize, orientation)} />
    <Block>
      <IconRing width={iconSize} height={iconSize} color={color} />
    </Block>
    <Block backgroundColor={color} {...getSizes(endSize, orientation)} />
  </Block>
);

Rail.propTypes = {
  size: PropTypes.number,
  iconSize: PropTypes.number,
  color: PropTypes.string,
  startSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<"grow">(["grow"]),
  ]),
  endSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<"grow">(["grow"]),
  ]),
  orientation: PropTypes.oneOf(["row", "column"]),
};

Rail.defaultProps = {
  iconSize: 10,
  color: "#000",
  size: 40,
  startSize: 40,
  endSize: "grow",
  orientation: "column",
};

export default Rail;
