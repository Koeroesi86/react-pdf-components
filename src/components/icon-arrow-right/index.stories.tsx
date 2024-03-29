import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconArrowRight, { IconArrowRightComponentProps } from "./index";

export default {
  title: "Example/Elements/IconArrowRight",
  component: IconArrowRight,
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
} as Meta<typeof IconArrowRight>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<IconArrowRightComponentProps> = (args) => (
  <IconArrowRight {...args} />
);

export const Default = Template.bind({});
