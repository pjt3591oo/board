import DefaultTemplete from '../../templetes/default';
import BoardDetail from '../../organisms/boards/detail';

const Detail = props => {
  return (
    <DefaultTemplete 
      center={<BoardDetail {...props} />}
    />
  )
}

Detail.propTypes = {

}

Detail.defaultProps = {

}

export default Detail;