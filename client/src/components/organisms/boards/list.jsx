import { useState, useEffect } from 'react';

import Btn from '../../atoms/button';
import Row from '../../molecules/row/board';
import Pagination from '../pagination';

import apis from '../../../apis';

const Boards = props => {
  let [boards, setBoards] = useState([]);
  let [limit, setLimit] = useState(2);
  let [currentPage, setCurrentpage] = useState(0);
  let [totalPage, setTotalPage] = useState(10);
  
  useEffect(() => {
    (async () => {
      let { data } = await apis.board.findAll({limit, page: currentPage})
      setBoards(data.results);
      setTotalPage(data.totalPage);
    })();
  }, [])

  useEffect(() => {
    (async () => {
      let { data } = await apis.board.findAll({limit, page: currentPage})
      setBoards(data.results);
      setTotalPage(data.totalPage);
    })();
  }, [limit, currentPage])

  return (  
    <div>
      <table style={{margin: "auto"}}>
        <thead>
          <th>No</th>
          <th>제목</th>
          <th>작성일</th>
        </thead>

        <tbody>
          {boards.map((board, boardIdx) => (
            <Row 
              {...board} 
              idx={board.id} 
              onClick={() => props.history.push(`/board/detail/${board.id}`)}
            />
          ))}
        </tbody>
      </table>

      <div style={{marginTop: 20}}>
        
        <div style={{float: 'right'}}>
          <Btn value="글 작성" onClick={() => props.history.push('/board/write')}/>
        </div>
        
        <Pagination 
          limit={limit}
          currentPage={currentPage}
          totalPage={totalPage}
          onChange={currentPage => setCurrentpage(currentPage)}
        />

      </div>
    </div>
  )
}

Boards.propTypes = {}

export default Boards