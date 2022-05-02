import React from "react"
import {
    StyledInfo,
    StyledInfoTitle,
    StyledInfoText,
    StyledItem,
} from "./info-block.styled"

interface IProps {
    className?: string
    ip: string
    location: string
    timezone: string
    isp: string
    error: boolean
}

export const InfoBlock: React.FC<IProps> = ({
    className,
    ip,
    location,
    timezone,
    isp,
    error,
}) => {
    return (
        <StyledInfo className={className}>
            {error ? (
                "Произошла ошибка"
            ) : (
                <>
                    <StyledItem>
                        <StyledInfoTitle>IP address</StyledInfoTitle>
                        <StyledInfoText>{ip}</StyledInfoText>
                    </StyledItem>
                    <StyledItem>
                        <StyledInfoTitle>Location</StyledInfoTitle>
                        <StyledInfoText>{location}</StyledInfoText>
                    </StyledItem>
                    <StyledItem>
                        <StyledInfoTitle>Timezone</StyledInfoTitle>
                        <StyledInfoText>{timezone}</StyledInfoText>
                    </StyledItem>
                    <StyledItem>
                        <StyledInfoTitle>ISP</StyledInfoTitle>
                        <StyledInfoText>{isp}</StyledInfoText>
                    </StyledItem>
                </>
            )}
        </StyledInfo>
    )
}
