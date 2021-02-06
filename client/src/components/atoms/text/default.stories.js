
import React from 'react';

import Default from './default';

export default {
  title: 'Atoms/Text/Default',
  component: Default,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
}

const Template = (args) => <Default {...args}> {args.value}</Default>;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Default text',
  bold: false
};


