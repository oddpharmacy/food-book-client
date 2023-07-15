import React, { useEffect, useState, useContext } from "react";
import { LocationText } from "../styles/Location.style";
import { LocationContext, LocationContextProps } from "../state/location";

interface LocationPosition {
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
}

interface LocationCoordProps {
  coords: LocationPosition;
  timestamp: number;
}

const Location: React.FC = () => {
  const { location, setLocation } =
    useContext<LocationContextProps>(LocationContext);
  const [latitude, setLatitude] = useState<number | null>(0);
  const [longitude, setLongitude] = useState<number | null>(0);
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const success = (pos: LocationCoordProps) => {
    let crd = pos.coords;
    setLocation({ latitude: crd.latitude, longitude: crd.longitude });
    console.log("locaaa", location);
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
  };

  const getLocationInfo = async (latitude: number, longitude: number) => {
    const result = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=6d0e711d72d74daeb2b0bfd2a5cdfdba` //using opencage tester key
    );
    const data = await result.json();
    setCity(data.results[0].components["city"]);
    setCountry(data.results[0].components["country"]);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        navigator.geolocation.getCurrentPosition(success);
      });
    }
    if (latitude && longitude) {
      getLocationInfo(latitude, longitude);
    }
  }, [latitude, longitude]);

  return (
    <>
      {city && country ? (
        <LocationText>
          Looks like you're in {city}, {country}
        </LocationText>
      ) : null}
    </>
  );
};

export default Location;
