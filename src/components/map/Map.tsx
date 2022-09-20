import MapStyled from "./MapStyled";

export interface ICoordinates {
  lat: number;
  lng: number;
}

const Map = ({ lat, lng }: ICoordinates): JSX.Element => {
  const mapsKey = process.env.REACT_APP_MAPS_API_KEY;

  return (
    <MapStyled
      width="450"
      height="250"
      style={{ border: 0 }}
      title={"complaint location"}
      src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${
        [lat, lng] + `&zoom=16`
      }`}
      allowFullScreen={false}
    ></MapStyled>
  );
};

export default Map;
