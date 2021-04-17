import React from "react";
import { IconProps, IconPropTypes } from "@app-types";
import { Path, Svg } from "@react-pdf/renderer";

export type IconStarComponentProps = IconProps;

const IconStar: React.FC<IconStarComponentProps> = ({
  children,
  width,
  height,
  color,
}) => (
  <Svg
    width={width}
    height={height}
    style={{ position: "relative", top: height / 4 }}
    viewBox="0 0 576 512"
  >
    <Path
      fill={color}
      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
    />
    {children}
  </Svg>
);

IconStar.propTypes = { ...IconPropTypes };

IconStar.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
};

export default IconStar;
