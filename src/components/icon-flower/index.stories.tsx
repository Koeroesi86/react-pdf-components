import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconFlower, { IconFlowerComponentProps } from "./index";

export default {
  title: "Example/Elements/IconFlower",
  component: IconFlower,
  decorators: [decorator("A6")],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
  },
  args: {
    width: 12,
    height: 12,
    color: "#000",
  },
} as Meta<typeof IconFlower>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<IconFlowerComponentProps> = (args) => (
  <IconFlower {...args} />
);

export const Default = Template.bind({});
