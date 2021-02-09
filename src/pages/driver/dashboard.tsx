import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

interface ICoords {
  lat: number;
  lng: number;
}

export const Dashboard = () => {
  const [driverCoords, setDriverCoords] = useState<ICoords>({ lng: 0, lat: 0 });
  const [map, setMap] = useState<any>();
  const [maps, setMaps] = useState<any>();

  const onSucces = ({
    coords: { latitude, longitude },
  }: GeolocationPosition) => {
    setDriverCoords({ lat: latitude, lng: longitude });
  };

  const onError = (error: GeolocationPositionError) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.watchPosition(onSucces, onError, {
      enableHighAccuracy: true,
    });
  }, []);

  useEffect(() => {
    if (map && maps) {
      map.panTo(new maps.LatLng(driverCoords.lat, driverCoords.lng));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [driverCoords.lat, driverCoords.lng]);

  const onApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    map.panTo(new maps.LatLng(driverCoords.lat, driverCoords.lng));
    setMap(map);
    setMaps(maps);
  };

  return (
    <div>
      <div
        className="overflow-hidden"
        style={{ width: window.innerWidth, height: "50vh" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCjWLlQWPNmpB3Wejb25D9-EqKu0BEkj4w" }}
          defaultCenter={{
            lat: 37.55,
            lng: 126.97,
          }}
          defaultZoom={16}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={onApiLoaded}
        >
          <div
            // @ts-ignore
            lat={driverCoords.lat}
            lng={driverCoords.lng}
            className="text-lg"
          >
            🚖
          </div>
        </GoogleMapReact>
      </div>
    </div>
  );
};
