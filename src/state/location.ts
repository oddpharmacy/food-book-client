import { createContext } from "react";

interface LocationProps {
  latitude: number | null;
  longitude: number | null;
}

export interface LocationContextProps {
  location: LocationProps | null;
  setLocation: React.Dispatch<React.SetStateAction<LocationProps>>;
}

export const LocationContext = createContext<LocationContextProps>({
  location: null,
  setLocation: () => {},
});
