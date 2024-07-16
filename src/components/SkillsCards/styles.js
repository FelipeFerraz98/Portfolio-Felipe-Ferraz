import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

export const Card = styled.div`
    background-color: #2a2a2a;
    margin: 2em;
    padding: 5em;
    border-radius: 3em;
    align-items: center;
    text-align: center;
    width: 6em;
    max-height: 6em;
`;

export const Image = styled.img`
    width: 70px;
`

export const TextContent = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-top: 10px;
    line-height: 30px;

    color: #fff;
    margin-bottom: 8em;
`;