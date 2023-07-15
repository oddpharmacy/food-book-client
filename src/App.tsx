import Navbar from "./components/Navbar";
import AppRoutes from "./routes";
import Footer from "./components/Footer";

import { useState } from "react";
import { LocationContext } from "./state/location";

interface LocationProps {
  latitude: number | null;
  longitude: number | null;
}

function App() {
  const [location, setLocation] = useState<LocationProps>({
    latitude: null,
    longitude: null,
  });
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <Navbar />
      <AppRoutes />
      <Footer />
    </LocationContext.Provider>
  );
}

export default App;
