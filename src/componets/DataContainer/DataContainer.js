import styled from 'styled-components';

const MyDataContainer = styled.div`
    font-size: 2vw;
    color: white;
    font-weight: bold;
    display: flex;
    width: 50%;
    height: 300px;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 200px;
    padding: 2rem;
    
    @media (max-width: 1200px) {
        font-size: 3vw;
    }
    @media (max-width: 500px) {
        font-size: 5vw;
    }
`;

const DataContainer = ({ text }) => <MyDataContainer className="data_wrap">{text}</MyDataContainer>

export default DataContainer;