import React from "react"
import {
    StyledInfo,
    StyledInfoTitle,
    StyledInfoText,
} from "./info-block.styled"

interface IProps {
    className?: string
    ip?: string
    location?: string
    timezone?: string
    isp?: string
}

export const InfoBlock: React.FC<IProps> = ({
    className,
    ip,
    location,
    timezone,
    isp,
}) => {
    return (
        <StyledInfo className={className}>
            <div>
                <StyledInfoTitle>IP address</StyledInfoTitle>
                <StyledInfoText>{ip}</StyledInfoText>
            </div>
            <div>
                <StyledInfoTitle>Location</StyledInfoTitle>
                <StyledInfoText>{location}</StyledInfoText>
            </div>
            <div>
                <StyledInfoTitle>Timezone</StyledInfoTitle>
                <StyledInfoText>{timezone}</StyledInfoText>
            </div>
            <div>
                <StyledInfoTitle>ISP</StyledInfoTitle>
                <StyledInfoText>{isp}</StyledInfoText>
            </div>
        </StyledInfo>
    )
}
