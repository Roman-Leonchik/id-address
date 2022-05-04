import styled from "styled-components"
import { media } from "@src/client/components/lib/styled-components/variables"

export const StyledHome = styled.div`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`

export const StyledMap = styled.div`
    position: relative;
    z-index: 1;
    .leaflet-container {
        height: calc(100vh - 280px);
        min-height: 400px;
        width: 100vw;
    }
    .leaflet-control-zoom {
        margin-top: 100px;
    }
    ${media.tablet`
        .leaflet-control-zoom {
            margin-top: 180px;
        }
    `}
`
