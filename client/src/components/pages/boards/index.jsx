import DefaultTemplete from '../../templetes/default';
import TableBoard from '../../organisms/boards';

const Boards = props => {
  return (
    <DefaultTemplete 
      center={<TableBoard {...props} />}
    />
  )
}

Boards.propTypes = {

}

Boards.defaultProps = {
  
}

export default Boards; 