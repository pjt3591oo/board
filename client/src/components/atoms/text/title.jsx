import styled from 'styled-components';

const _Title = styled.h2`
`

const Title = (props) => {
  return (
    <_Title {...props}>
      {props.value}
    </_Title>
  )
}

export default Title;