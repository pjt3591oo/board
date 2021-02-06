import DefaultTemplete from '../../templetes/default';
import BoardDetail from '../../organisms/board';

const Edit = props => {
  return (
    <DefaultTemplete 
      center={<BoardDetail {...props} />}
    />
  )
}

Edit.propTypes = {

}

Edit.defaultProps = {
  
}

export default Edit;