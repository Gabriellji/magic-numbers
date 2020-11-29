import styled from 'styled-components';

const MyButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 25px;
  outline: none;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 3rem 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const Button = ({ text, onClick }) =>
    <MyButton onClick={() => onClick()}>{text}</MyButton>

export default Button;
