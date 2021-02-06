import styled from 'styled-components';

const _File = styled.input.attrs({
	type: 'file'
})`

`

const FileInput = (props) => {
  return (
    <_File {...props} />
  )
}

export default FileInput