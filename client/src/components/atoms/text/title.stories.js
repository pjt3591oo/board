

import React from 'react';

import Title from './title';

export default {
  title: 'Atoms/Text/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
}

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Title text',
};


