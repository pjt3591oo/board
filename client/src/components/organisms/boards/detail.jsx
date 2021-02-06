import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Btn from '../../atoms/button';
import FormBoard from '../form/board';

import api from '../../../apis';

const Board = props => {
  const [ boardId, setBoardId ] = useState(props.match.params.id)
  const [ board, setBoard] = useState({});
  const [ editMode, setEditMode ] = useState(true)

  useEffect(() => {
    (async () => {
      let {data} = await api.board.findOne(boardId);
      setBoard(data)
    })()
  }, [boardId]);

  const onDeleteClickhandler = async () => {
    try {
      await api.board.delete(boardId)
      props.history.push('/board');
    } catch(err) {
      console.log(err);
    }
  }  

  const onSaveHandler = async () => {
    console.log('test')
    try {
      await api.board.update(boardId, {title: board.title, body: board.body})
      setEditMode(true)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <FormBoard 
        board={board}
        onChange={changedBoard => setBoard({...board, title: changedBoard.title, body: changedBoard.body})}
        editMode={editMode}
      />
      
      <div>
        {editMode ? (
          <>
            <Btn value="수정" onClick={() => setEditMode(false)}/>
            <Btn value="삭제" onClick={onDeleteClickhandler} />
          </>
        ): (
          <>
            <Btn value="저장" onClick={onSaveHandler}/>
          </>
        )}
      </div>
    </div>
  )
}

Board.propTypes = {}

export default Board;