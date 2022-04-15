import React from "react"
import { StyledInput } from "./input.styled"

interface IProps {
    value: string
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<IProps> = ({ value, onInput }) => {
    return (
        <StyledInput
            value={value}
            onInput={onInput}
            placeholder="Search for any IP address or domain"
        />
    )
}
