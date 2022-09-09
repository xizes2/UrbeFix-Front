import { useCallback, useEffect, useState } from "react";
import MapStyled from "./MapStyled";

const Map = (): JSX.Element => {
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [status, setStatus] = useState<boolean>();

  const isLocationAllowed = navigator.geolocation;

  const getLocation = useCallback(() => {
    if (!isLocationAllowed) {
      setStatus(false);
    } else {
      setStatus(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus(false);
        }
      );
    }
  }, [isLocationAllowed]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <MapStyled
      width="450"
      height="250"
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBKL-riXyqF4uN3DVLmo0hRH4fYh5NeZn4&q=${
        status ? [lat, lng] + `&zoom=16` : [41.390205, 2.154007] + `&zoom=11`
      }`}
      allowFullScreen={false}
    ></MapStyled>
  );
};

export default Map;
