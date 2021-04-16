import PropTypes, { ValidationMap } from "prop-types";

export interface IconProps {
  width: number;
  height: number;
  color: string;
}

// primitive types
export type pos = "absolute" | "relative";
export type fd = "row" | "column";
export type jc =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "space-between"
  | "space-evenly";
export type ai = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
export type o = "hidden";

// prop-type options
export const position: pos[] = ["absolute", "relative"];
export const flexGrow = [0, 1];
export const flexDirection: fd[] = ["row", "column"];
export const justifyContent: jc[] = [
  "flex-start",
  "flex-end",
  "center",
  "space-around",
  "space-between",
  "space-evenly",
];
export const alignItems: ai[] = [
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "baseline",
];
export const overflow: o[] = ["hidden"];

export const IconPropTypes: ValidationMap<IconProps> = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
