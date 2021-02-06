
import React from 'react';

import Boards from './';

export default {
  title: 'Organisms/Boards/List',
  component: Boards,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
}

const Template = (args) => <Boards {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};


