import styled from 'styled-components';

const MyInput = styled.input`
    font-size: 2vw;
    text-align: center;
    border-radius: 5px;
    width: 50%;
    height: 50px;
`;

const Input = ({ onChange, value, placeholder }) =>
    <MyInput
        placeholder={placeholder}
        value={value}
        className="input"
        onChange={(e) => onChange(e)} />

export default Input;