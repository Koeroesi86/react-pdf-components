import React from "react";
import { Text } from "@react-pdf/renderer";
import { Meta, Story } from "@storybook/react";
import { decorator } from "@stories";
import Fragment, { FragmentComponentProps } from "./index";

export default {
  title: "Example/Blocks/Fragment",
  component: Fragment,
  decorators: [decorator("A6")],
  argTypes: {
    node: { control: "text" },
  },
} as Meta<FragmentComponentProps>;

const Template: Story<FragmentComponentProps> = (args) => (
  <Text>
    <Fragment {...args} />
  </Text>
);

export const Default = Template.bind({});
