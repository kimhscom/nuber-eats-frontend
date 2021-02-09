import React from "react";
import GoogleMapReact from "google-map-react";

export const Dashboard = () => {
  return (
    <div>
      <div
        className="overflow-hidden"
        style={{ width: window.innerWidth, height: "95vh" }}
      >
        <GoogleMapReact
          defaultZoom={15}
          defaultCenter={{
            lat: 37.55,
            lng: 126.97,
          }}
          bootstrapURLKeys={{ key: "AIzaSyCjWLlQWPNmpB3Wejb25D9-EqKu0BEkj4w" }}
        ></GoogleMapReact>
      </div>
    </div>
  );
};
