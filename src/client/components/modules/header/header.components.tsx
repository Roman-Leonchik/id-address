import { useState } from "react"
import {
    StyledHeader,
    StyledTitle,
    StyledForm,
    StyledSubmit,
    StyledInfoBlock,
} from "./header.styled"
import { IUser } from "client/components/templates/home.template"
import { Input } from "@elements/input/input.element"

interface IProps {
    user: IUser
    error: boolean
}

export const Header: React.FC<IProps> = ({ user, error }) => {
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
            <StyledInfoBlock
                ip={user.ip}
                location={user.location}
                timezone={`UTC${user.timezone}`}
                isp={user.isp}
                error={error}
            />
        </StyledHeader>
    )
}
