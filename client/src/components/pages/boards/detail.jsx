import DefaultTemplete from '../../templetes/default';
import BoardDetail from '../../organisms/board';

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