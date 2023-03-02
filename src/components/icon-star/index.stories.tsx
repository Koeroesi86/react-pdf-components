import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconStar, { IconStarComponentProps } from "./index";

export default {
  title: "Example/Elements/IconStar",
  component: IconStar,
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
} as Meta<typeof IconStar>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<IconStarComponentProps> = (args) => (
  <IconStar {...args} />
);

export const Default = Template.bind({});
