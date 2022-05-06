import { useState } from "react"
import { Header } from "../modules/header/header.components"
import { MapsPage } from "../modules/map/maps.components"
import { StyledHome, StyledMap } from "./home.templates"

export interface IUser {
    ip: string
    location?: string
    timezone?: string
    isp?: string
}

export const HomeTemplate = () => {
    const [error, setError] = useState(false)
    const [userInfo, setUserInfo] = useState<IUser>({
        ip: "",
        location: "",
        timezone: "",
        isp: "",
    })

    const handlerSetIP = (id: string) => {
        setUserInfo((prev) => ({
            ...prev,
            ip: id,
        }))
    }

    const handlerSetInfo = (IUser: IUser) => {
        setUserInfo(() => ({
            ip: IUser.ip,
            location: IUser.location,
            timezone: IUser.timezone,
            isp: IUser.isp
        }))
    }

    return (
        <StyledHome>
            <Header user={userInfo} error={error} changeIP={handlerSetIP} />
            <StyledMap>
            <MapsPage userInfo={userInfo} setInfo={handlerSetInfo} />
            </StyledMap>
        </StyledHome>
    )
}
