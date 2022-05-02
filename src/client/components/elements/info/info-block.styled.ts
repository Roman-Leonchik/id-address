import styled from "styled-components"

export const StyledInfo = styled.div`
    background-color: ${({ theme }) => theme.white};
    max-width: 1100px;
    width: calc(100vw - 40px);
    padding: 35px 15px 20px;
    margin: 0 auto;
    display: flex;
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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: 60px;
`

export const StyledItem = styled.div`
    width: 25%;
    position: relative;
    padding: 0 20px;
    &:not(:last-child) {
        &:before {
            content: "";
            position: absolute;
            right: 1px;
            top: 10%;
            bottom: 10%;
            display: block;
            width: 1px;
            background: ${({ theme }) => theme.gray};
        }
    }
`
