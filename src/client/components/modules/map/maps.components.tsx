import axios from "axios"
import { useState, useEffect } from "react"
import { MapContainer, ZoomControl } from "react-leaflet"
import { Layers } from "./layers.element"

export interface IUser {
    ip: string
    location?: string
    timezone?: string
    isp?: string
}

interface IProps {
    userInfo: IUser
    setInfo: (IUser: IUser) => void
}

export const MapsPage: React.FC<IProps> = ({ userInfo, setInfo }) => {
    const [error, setError] = useState(false)
    const [mapСoordinates, setMapСoordinates] = useState({
        lat: 53.9045398,
        lng: 27.5615244
    })

    const getInfo = async (ip: string) => {
        const res = await axios
            .get(`https://ipwho.is/${ip}`)
            .then((response) => {
                setError(false)
                return response
            })
            .catch(() => {
                setError(true)
            })
        if (!error) {
            setInfo({
                ip: res?.data.ip,
                location: `${res?.data.country}, ${res?.data.city}`,
                timezone: `UTC${res?.data.timezone.utc}`,
                isp: res?.data.connection.isp,
            })
            setMapСoordinates(() => ({
                lat: res?.data.latitude,
                lng: res?.data.longitude,
            }))
        }
    }

    useEffect(() => {
        getInfo(userInfo.ip)
    }, [userInfo.ip])

    return (
        <MapContainer
            center={mapСoordinates}
            zoom={12}
            zoomControl={false}
        >
            <Layers coord={mapСoordinates}/>
            <ZoomControl position="topright" />
        </MapContainer>
    )
}
