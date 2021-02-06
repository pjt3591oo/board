import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Input from '../../atoms/input';
import Wysiwyg from '../../molecules/wysiwyg';

const Board = props => {
  const [ originBoard, setOriginBoard ] = useState({});
  const [title, setTitle] = useState('');
  const [body, setBody]  = useState('');

  useEffect(() => {
    setOriginBoard({
      title: props.board.title,
      body: props.board.body
    })
  }, [props.board])

  useEffect(() => {
    setTitle(originBoard.title)
    setBody(originBoard.body)
  }, [originBoard])

  const onChangeTitleHandler = e => {
    let changed = {title: e.target.value, body};
    setTitle(e.target.value)
    props.onChange(changed)
  }
  const onChangeBodyHandler = text => {
    let changed = {title, body: text};
    setBody(text)
    props.onChange(changed)
  }

  return (
    <div>
      <div>
        제목: <Input type="text" value={title} onChange={onChangeTitleHandler} disabled={props.writeMode}/>
      </div>
      <div>
        {props.writeMode ? (
          <>내용: <div dangerouslySetInnerHTML={{__html: body}} /></>
          // <Input type="text" value={body} onChange={onChangeBodyHandler} disabled={props.writeMode}/>
        ): <Wysiwyg value={body} onChange={onChangeBodyHandler} />}
      </div>
    </div>
  )
}

Board.propTypes = {
  onChange: PropTypes.func,
  writeMode: PropTypes.bool,
  board: PropTypes.object
}

export default Board;