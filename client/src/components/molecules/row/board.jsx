import PropTypes from 'prop-types';
import DefaultText from '../../atoms/text/default';

const Row = props => {
  return (
    <tr key={props.idx} onClick={props.onClick}>
      <td><DefaultText />{props.idx}</td>
      <td><DefaultText />{props.title}</td>
      <td><DefaultText />{props.createdAt}</td>
    </tr>
  )
}

Row.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,

  onClick: PropTypes.func
}

Row.defaultProps = {

}

export default Row;