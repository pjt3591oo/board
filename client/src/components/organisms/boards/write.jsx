import { useState } from 'react';

import Btn from '../../atoms/button';
import FormBoard from '../form/board';

import api from '../../../apis';

const Write = props => {
  const [ board, setBoard] = useState({});

  const onSaveHandler = async () => {
    try {
      let { data } = await api.board.create({title: board.title, body: board.body})
      
      props.history.push('/board');
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <FormBoard 
        board={board}
        onChange={changedBoard => setBoard({...board, title: changedBoard.title, body: changedBoard.body})}
        editMode
      />
      
      <div>
        <Btn value="저장" onClick={onSaveHandler}/>
      </div>
    </div>
  )
}

Write.propTypes = {}

export default Write;