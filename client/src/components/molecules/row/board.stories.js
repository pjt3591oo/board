
import React from 'react';

import BoardRow from './board';

export default {
  title: 'Molecules/Board/Row',
  component: BoardRow,
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
}

const Template = (args) => (
  <table>
    <thead>
      <th>No</th>
      <th>제목</th>
      <th>작성일</th>
    </thead>
    <tbody>
      <BoardRow {...args} />
      <BoardRow {...args} />
      <BoardRow {...args} />
      <BoardRow {...args} />
      <BoardRow {...args} />
    </tbody>
  </table>
)

export const Row = Template.bind({});
Row.args = {
  idx: 1,
  title: "제목",
  body: "내용",
  createdAt: "2021-02-06 03:02:43.783154"
};

