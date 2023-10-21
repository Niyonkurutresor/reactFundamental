import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/info";
export function Map() {
  const navigateTo = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { d } = useCities();
  return (
    <>
      <div
        className="h-screen w-[70%] min-w-[40rem] bg-white "
        onClick={() => navigateTo("form")}
      >
        <MapContainer
          center={mapPosition}
          zoom={13}
          scrollWheelZoom={true}
          className="h-screen"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {d.map((el) => {
            const { position } = el;
            return (
              <Marker position={[position.lat, position.lng]} key={el.id}>
                <Popup>
                  {el.ountry}. <br />
                  {el.emoje}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </>
  );
}
