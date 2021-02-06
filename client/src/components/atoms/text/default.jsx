import styled from 'styled-components';

const _DefaultText = styled.span`
  display: inline-block;
  margin: 5px;
  font-weight: ${props => props.bold ? "900" : "400"} !important;
`

const DefaultText = (props) => {
  return (
    <_DefaultText {...props}>
      {props.children}
    </_DefaultText>
  )
}

export default DefaultText;