import React from "react";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import IconBag, { IconBagComponentProps } from "./index";

export default {
  title: "Example/Elements/IconBag",
  component: IconBag,
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
} as Meta<IconBagComponentProps>;

const Template: Story<IconBagComponentProps> = (args) => <IconBag {...args} />;

export const Default = Template.bind({});
