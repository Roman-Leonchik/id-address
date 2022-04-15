import styled from "styled-components"

export const StyledHome = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
`

export const StyledMap = styled.div`
    position: relative;
    z-index: 1;
    .leaflet-container {
        height: calc(100vh - 280px);
        width: 100vw;
    }
`
