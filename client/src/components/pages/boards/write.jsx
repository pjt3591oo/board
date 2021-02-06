import DefaultTemplete from '../../templetes/default';
import BoardWrite from '../../organisms/boards/write';

const Write = props => {
  return (
    <DefaultTemplete 
      center={<BoardWrite {...props} />}
    />
  )
}

Write.propTypes = {

}

Write.defaultProps = {
  
}

export default Write; 