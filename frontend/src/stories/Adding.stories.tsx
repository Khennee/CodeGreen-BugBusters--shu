import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Adding from "../components/Adding";

type AddingProps = {
  text: string;
};

export default {
  title: "Components/Adding",
  component: Adding,
  argTypes: {
    text: { control: 'text', description: 'Text displayed in the loading overlay' },
  },
} as Meta;

const Template: StoryFn<AddingProps> = (args: AddingProps) => <Adding {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  text: "Loading, please wait...",
};

export const Saving = Template.bind({});
Saving.args = {
  text: "Saving your data...",
};

export const Fetching = Template.bind({});
Fetching.args = {
  text: "Fetching data from the server...",
};
