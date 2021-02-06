import React from 'react';

import DefaultBtn from './';

export default {
  title: 'Atoms/Button',
  component: DefaultBtn,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
}

const Template = (args) => <DefaultBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  value: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  value: 'Button',
};

export const Middle = Template.bind({});
Middle.args = {
  size: 'middle',
  value: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  value: 'Button',
};
