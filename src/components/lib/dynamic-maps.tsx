"use client"

import L from "leaflet"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "../../../public/imgs/location.png"
import relocationMarker from "leaflet/dist/images/marker-relocation.png"
import workMarker from "../../../public/imgs/workplace.png"
import { MapData } from "@/types/types"

const homeIcon = L.icon({
  iconUrl: markerShadow.src,
  iconSize: [35, 35],
})



const workIcon = L.icon({
  iconUrl: workMarker.src,
  iconSize: [35, 35],
})

export const mapData: MapData[] = [
  {
    id: 1,
    name: "Washington D.C",
    lgt: [27.664827, -81.515754],
    popUp: "this is dc",
    markerIcon: homeIcon,
  },
  {
    id: 2,
    name: "New York",
    lgt: [40.73061, -73.935242],
    popUp: "this is nyc",
    markerIcon: workIcon,
  },
]

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
  workMarker: workMarker.src,
  relocationMarker: relocationMarker.src,
  iconSize: [25, 25],
})

type Props = {
  center?: number[]
}

function Map({ center }: Props) {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[40vh] rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <>
        {mapData.map((data) => (
          <Marker
            position={data.lgt as L.LatLngExpression}
            key={data.id}
            icon={data.markerIcon}
          >
            <Popup>{data.popUp}</Popup>
          </Marker>
        ))}
      </>
    </MapContainer>
  )
}

export default Map
