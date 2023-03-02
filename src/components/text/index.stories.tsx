import React from "react";
import {  Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import Text, { TextComponentProps } from "./index";

export default {
  title: "Example/Blocks/Text",
  component: Text,
  decorators: [decorator("A6")],
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    underline: { control: "boolean" },
    size: { control: "number" },
    align: { type: "select", options: ["left", "center", "right"] },
  },
  args: {
    text: "example",
    color: "#000",
    underline: false,
    size: 12,
    align: "left",
  },
} as Meta<typeof Text>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<TextComponentProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
