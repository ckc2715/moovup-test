import { LatLngTuple } from "leaflet";
import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap
} from "react-leaflet";
import { Friend } from "../services/friendService";

import "./Map.css";

interface MapProps {
  selectedFriend: Friend | undefined;
}

const DEFAULT_MAP_LOCATION: LatLngTuple = [22.302711, 114.177216];

export const Map: React.FC<MapProps> = ({ selectedFriend }) => {
  return (
    <div className="leaflet-map">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={DEFAULT_MAP_LOCATION}
        zoom={10}
        scrollWheelZoom={false}
      >
        <ChangeView selectedFriend={selectedFriend} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedFriend && (
          <Marker
            position={[
              selectedFriend.location.latitude,
              selectedFriend.location.longitude
            ]}
          >
            <Tooltip permanent>
              <div>
                Name: {selectedFriend.name.first} {selectedFriend.name.last}
              </div>
              <div>Email: {selectedFriend.email}</div>
              <div>Latitude: {selectedFriend.location.latitude}</div>
              <div>Longitude: {selectedFriend.location.longitude}</div>
            </Tooltip>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

const ChangeView: React.FC<MapProps> = ({ selectedFriend }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedFriend) {
      map.setView([
        selectedFriend.location.latitude,
        selectedFriend.location.longitude
      ]);
    }
  }, [selectedFriend, map]);

  return null;
};
