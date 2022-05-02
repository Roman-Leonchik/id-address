import axios from "axios"
import { useState, useEffect } from "react"
import { Header } from "../modules/header/header.components"
import { StyledHome, StyledMap } from "./home.templates"
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet"

export interface IUser {
    ip: string
    location: string
    timezone: string
    isp: string
}

interface IMap {
    latitude: string
    longitude: string
}

export const HomeTemplate = () => {
    const [error, setError] = useState(false)
    const [mapСoordinates, setMapСoordinates] = useState<IMap>({
        latitude: "53.9045398",
        longitude: "27.5615244",
    })
    const [user, setUser] = useState<IUser>({
        ip: "",
        location: "",
        timezone: "",
        isp: "",
    })

    const getIP = async () => {
        /*const res = await axios.get("https://ipwho.is/&fields=city,timezone,country,connection,latitude,longitude")
        setUser({
            ip: res.data.ip,
            location: `${res.data.country}, ${res.data.city}`,
            timezone: res.data.timezone.utc,
            isp: res.data.connection.isp,
        })*/
        const res = await axios.get("https://geolocation-db.com/json/")
        setUser((prev) => ({
            ...prev,
            ip: res.data.IPv4,
        }))
    }

    const getAddress = async (ip: string) => {
        const res = await axios
            .get(`https://geolocation-db.com/json/${ip}`)
            .then((response) => {
                setError(false)
                return response
            })
            .catch(() => {
                setError(true)
            })
        if (!error) {
            setUser((prev) => ({
                ...prev,
                location: `${res?.data.country_name}, ${res?.data.city}`,
                //timezone: res?.data.location.timezone,
                //isp: res?.data.isp,
            }))
            /*setMapСoordinates({
                latitude: res?.data.latitude,
                longitude: res?.data.longitude,
            })*/
        }
    }

    useEffect(() => {
        getIP()
    }, [])

    useEffect(() => {
        if (user.ip !== "") {
            getAddress(user.ip)
        }
    }, [user.ip])

    return (
        <StyledHome>
            <Header user={user} error={error} />
            <StyledMap>
                <MapContainer
                    center={[mapСoordinates.latitude, mapСoordinates.longitude]}
                    zoom={16}
                    zoomControl={false}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <ZoomControl position="topright" />
                </MapContainer>
            </StyledMap>
        </StyledHome>
    )
}
