import "./App.css";
import Start from "./Components/Pages/Start";
import ListOfTemperature from "./Components/Pages/ListOfTemperature";
import Navigation from "./Components/Navigation";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    let pageUrl = page;

    if (!pageUrl) {
      const queryParams = new URLSearchParams(window.location.search);
      const getUrl = queryParams.get("page");

      if (getUrl) {
        pageUrl = getUrl;
        setPage(getUrl);
      } else {
        pageUrl = "start";
      }
    }
    window.history.pushState(null, "", "?page=" + pageUrl);
  }, [page]);

  return (
    <>
      <h1>Temperaturmätning</h1>
      <Navigation setPage={setPage} />

      {{
        start: <Start />,
        listoftemperature: <ListOfTemperature />,
      }[page] || <Start />}
    </>
  );
}

export default App;
