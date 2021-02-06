
import React from 'react';

import InputFile from './input';

export default {
  title: 'Atoms/File/input',
  component: InputFile,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
}

const Template = (args) => <InputFile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // value: 'Default text',
};


