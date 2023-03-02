import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import {
  alignItems,
  flexDirection,
  flexGrow,
  justifyContent,
  overflow,
} from "@app-types";
import Block, { BlockComponentProps } from "./index";

export default {
  title: "Example/Blocks/Block",
  decorators: [decorator("A6")],
  component: Block,
  argTypes: {
    backgroundColor: { control: "color" },
    width: { control: "number" },
    height: { control: "number" },
    top: { control: "number" },
    left: { control: "number" },
    id: { control: "text" },
    flexGrow: { type: "select", options: [undefined, ...flexGrow] },
    flexDirection: { type: "select", options: [undefined, ...flexDirection] },
    justifyContent: {
      type: "select",
      options: [undefined, ...justifyContent],
    },
    alignItems: {
      type: "select",
      options: [undefined, ...alignItems],
    },
    overflow: { type: "select", options: [undefined, ...overflow] },
  },
  args: {
    backgroundColor: "#efefef",
    width: 60,
    height: 60,
  },
} as Meta<typeof Block>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<BlockComponentProps> = (args) => <Block {...args} />;

export const Default = Template.bind({});
