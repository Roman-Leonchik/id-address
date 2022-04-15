import { useState } from "react"
import {
    StyledHeader,
    StyledTitle,
    StyledForm,
    StyledSubmit,
    StyledInfoBlock,
} from "./header.styled"
import { Input } from "@elements/input/input.element"

export const Header = () => {
    const [value, setValue] = useState("")

    const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <StyledHeader>
            <StyledTitle>IP Address Tracker</StyledTitle>
            <StyledForm>
                <Input value={value} onInput={handlerInput} />
                <StyledSubmit type="submit" />
            </StyledForm>
            <StyledInfoBlock ip="192.212.174.101" />
        </StyledHeader>
    )
}
