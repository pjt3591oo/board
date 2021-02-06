
import React from 'react';

import Pagination from './';

export default {
  title: 'Organisms/Pagination',
  component: Pagination,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
}

const Template = (args) => <Pagination {...args} />;

export const Case1 = Template.bind({});
Case1.args = {
  limit: 10,
  currentPage: 0,
  totalPage: 110,
  onChange: idx => console.log(idx)
};


