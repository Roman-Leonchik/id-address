import { useEffect } from "react"
import { TileLayer, Marker, useMap } from "react-leaflet"

interface IProps {
    coord: {
        lat: number
        lng: number
    }
}

export const Layers: React.FC<IProps> = ({coord}) => {
    const map = useMap()

    useEffect(() => {
        map.setView(coord, 12)
    }, [coord])

    return (
        <>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={coord}/>
        </>
    )
}