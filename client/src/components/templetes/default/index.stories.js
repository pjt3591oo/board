
import React from 'react';

import Default from './';

const tempDom = <div style={{width: 200, height: 300, backgroundColor: "gray", margin: "auto"}} ></div>

export default {
  title: 'Templete/Default',
  component: Default,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
}
const Template = (args) => <Default  {...args} />

export const Row = Template.bind({});
Row.args = {
  limit: 10,
  page: 0,
  center: tempDom
}

