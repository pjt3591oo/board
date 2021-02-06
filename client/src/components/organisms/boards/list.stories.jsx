
import React from 'react';

import List from './list';

export default {
  title: 'Organisms/Boards/List',
  component: List,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
}

const Template = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};


