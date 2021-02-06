import styled from 'styled-components';

const _Btn = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const DefaultBtn = (props) => {
  return (
    <_Btn {...props}>
      {props.value}
    </_Btn>
  )
}

export default DefaultBtn;