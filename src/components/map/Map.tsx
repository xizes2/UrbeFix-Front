import { useCallback, useEffect, useState } from "react";
import MapStyled from "./MapStyled";

const Map = (): JSX.Element => {
  const mapsKey = process.env.REACT_APP_MAPS_API_KEY;
  const isUserGeolocationActive = navigator.geolocation;
  const barcelonaCoordinates = [41.390205, 2.154007];
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [status, setStatus] = useState<boolean>();
  const getLocation = useCallback(() => {
    if (!isUserGeolocationActive) {
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
  }, [isUserGeolocationActive]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <MapStyled
      width="450"
      height="250"
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${
        status
          ? [lat, lng] + `&zoom=16`
          : { bcnCoordinates: barcelonaCoordinates } + `&zoom=11`
      }`}
      allowFullScreen={false}
    ></MapStyled>
  );
};

export default Map;
