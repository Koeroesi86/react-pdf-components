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
} as Meta<typeof Fragment>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<FragmentComponentProps> = (args) => (
  <Text>
    {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
    <Fragment {...args} />
  </Text>
);

export const Default = Template.bind({});
