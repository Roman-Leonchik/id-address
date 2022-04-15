import styled from "styled-components"

export const StyledInfo = styled.div`
    background-color: ${({ theme }) => theme.white};
    max-width: 1100px;
    width: calc(100vw - 40px);
    padding: 35px 35px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: start;
    gap: 20px;
    box-shadow: ${({ theme }) => theme.dark} 0px 0px 10px;
    height: 160px;
    border-radius: 15px;
`

export const StyledInfoTitle = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.gray};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 15px;
`

export const StyledInfoText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: bold;
`
