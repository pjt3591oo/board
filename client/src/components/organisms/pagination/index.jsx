import PropTypes from 'prop-types';

import DefaultText from '../../atoms/text/default';

const Pagination = (props) => {
  const pages = []
  
  const VIEW_PAGE_CNT = 10
  const pageStart = props.currentPage - (VIEW_PAGE_CNT / 2)
  let pageEnd = props.currentPage + (VIEW_PAGE_CNT / 2)

  for(let i = pageStart ; i < pageEnd ; ++i) {
    if ( i >= 0 && i < props.totalPage) {
      pages.push(
        <DefaultText 
          onClick={() => props.onChange(i)}
          bold={i === props.currentPage}
        >{i}</DefaultText>
      )
    }
    else if(i < 0) {pageEnd += 1}
  }

  return (
    <div style={{textAlign: "center"}}>
      {pages}
    </div>
  )
}

Pagination.propTypes = {
  limit: PropTypes.number,
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,

  onChange: PropTypes.func
}

export default Pagination