import { Header } from "../modules/header/header.components"
import { StyledHome, StyledMap } from "./home.templates"
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet"

export const HomeTemplate = () => {
    return (
        <StyledHome>
            <Header />
            <StyledMap>
                <MapContainer
                    center={[37.0902, -95.7129]}
                    zoom={3}
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ZoomControl position="topright" />
                </MapContainer>
            </StyledMap>
        </StyledHome>
    )
}
