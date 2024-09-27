import "./temperature.css";
import { useEffect, useState } from "react";

interface Temperature {
  temperatureId: string;
  celcius: number;
  timestamp: string;
}

function ListOfTemperature() {
  const [temperatures, setTemperatures] = useState<Temperature[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/temperatures")
      .then((res) => res.json())
      .then((data) => {
        const sortedTemperatures = data.sort(
          (a: Temperature, b: Temperature) => {
            return (
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            );
          }
        );
        setTemperatures(sortedTemperatures);
      })
      .catch((error) =>
        console.error("Fel vid hämtning av temperaturer: ", error)
      );
  }, []);

  return (
    <div>
      <h1>Veckans mätningar</h1>
      <ul className="temperatureListUl">
        {temperatures.map((temperature) => (
          <li className="temperatureListLi" key={temperature.temperatureId}>
            Temperatur: {temperature.celcius} °C | Tid:{" "}
            {new Date(temperature.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfTemperature;
