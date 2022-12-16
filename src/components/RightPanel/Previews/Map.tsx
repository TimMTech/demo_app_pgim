import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Map: React.FC = () => {
  return (
    <ComposableMap className="p-4 ">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="blue"
              stroke="white"
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
