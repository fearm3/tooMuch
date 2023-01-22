// MyComponent.stories.ts| tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const ExampleStory = Template.bind({});
ExampleStory.args = {
  propertyA: process.env.STORYBOOK_DATA_KEY,
};
