"use client"

import L from "leaflet"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "../../../public/imgs/location.png"
import workMarker from "../../../public/imgs/workplace.png"
import relocationMarker from "../../../public/imgs/relocation.png"
import { MapData } from "@/types/types"

const homeIcon = L.icon({
  iconUrl: markerShadow.src,
  iconSize: [35, 35],
})

const relocationIcon = L.icon({
  iconUrl: relocationMarker.src,
  iconSize: [25, 25],
})


const workIcon = L.icon({
  iconUrl: workMarker.src,
  iconSize: [35, 35],
})

export const mapData: MapData[] = [
  {
    id: 1,
    name: "York Pennsylvania",
    lgt: [39.962303, -76.727692],
    popUp: "Work from home 🏠",
    markerIcon: homeIcon,
  },
  {
    id: 2,
    name: "New York",
    lgt: [40.73061, -73.935242],
    popUp: "williing to relocate to New York 💼",
    markerIcon: relocationIcon,
  },
    {
    id: 3,
    name: "San Bernardino",
    lgt: [34.115784, 	-117.302399],
    popUp: "williing to relocate to san bernardino 💼",
    markerIcon: relocationIcon,
  },
     {
    id: 4,
    name: "Texas Austin",
    lgt: [30.266666, 		-97.733330],
    popUp: "🟢 activly looking for remote work here !",
    markerIcon: workIcon,
  },
    {
    id: 5,
    name: "Maryland",
    lgt: [	39.045753, -76.641273],
    popUp: "🟢 activly looking for remote work here !",
    markerIcon: workIcon,
  },
  {
    id: 6,
    name: "Wilmington Delaware",
    lgt: [39.739071, 	-75.539787],
    popUp: "williing to relocate to Wilmington Delaware 💼",
    markerIcon: relocationIcon,
  },
    {
    id: 7,
    name: "Los Angeles California",
    lgt: [	34.052235, 	-118.243683],
    popUp: "🟢 activly looking for remote work here !",
    markerIcon: workIcon,
  },
     {
    id: 8,
    name: "Seattle Washington",
    lgt: [47.608013, 		-122.335167],
    popUp: "🟢 activly looking for remote work here !",
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
  iconSize: [25, 25],
})

type Props = {
  center?: number[]
}

function Map({ center }: Props) {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [39.328986, -96.349682]}
      zoom={center ? 6 : 2}
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
