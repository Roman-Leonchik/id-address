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
    changeIP: (id: string) => void
}

export const Header: React.FC<IProps> = ({ user, error, changeIP }) => {
    const [value, setValue] = useState("")

    const checkText = (text: string) => {
        if (/[a-zа-яё]/i.test(text.toLocaleLowerCase())){
            return false
        }
        return true
    }

    const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.target.value
        if (checkText(inputText)) {
            setValue(inputText)
        }
    }

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (value.replace( /\.$|[^\d.]/gi , "").split(".").length !== 4) {
            return false
        }
        changeIP(value)
    }

    return (
        <StyledHeader>
            <StyledTitle>IP Address Tracker</StyledTitle>
            <StyledForm onSubmit={onSubmitForm}>
                <Input value={value} onInput={handlerInput} />
                <StyledSubmit type="submit" />
            </StyledForm>
            <StyledInfoBlock
                ip={user.ip}
                location={user.location}
                timezone={user.timezone}
                isp={user.isp}
                error={error}
            />
        </StyledHeader>
    )
}
