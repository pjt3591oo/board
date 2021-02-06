import styled from 'styled-components';

const Input = styled.input.attrs({})`
  border-radius: 5px;
  border: 0;
  padding: 5px;
  background-color: ${props => props.disabled? "white": "#e8e8e8"};
`

export default Input;