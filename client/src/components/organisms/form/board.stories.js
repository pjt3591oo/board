
import React from 'react';

import Board from './board';

export default {
  title: 'Organisms/Form/Board',
  component: Board,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
}

const Template = (args) => <Board {...args} />;

export const ReadMode = Template.bind({});
ReadMode.args = {
  title: "test",
  body: "body test",
  onChange: board => console.log(board),
};

export const WriteMode = Template.bind({});
WriteMode.args = {
  title: "test",
  body: "body test",
  onChange: board => console.log(board),
};


