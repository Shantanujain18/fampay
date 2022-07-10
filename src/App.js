
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserView, MobileView } from "react-device-detect";
import H3Card from "./components/H3Card/H3Card";

import H6Card from "./components/H6Card/H6Card";
import H5Card from "./components/H5Card/H5Card";
import H9Card from "./components/H9Card/H9Card";
import H1Card from "./components/H1Card/H1Card";
import H1CardScrollable from "./components/H1Card/H1CardScrollable";
import api from "./apis/api";
import { useEffect, useState } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
function App() {
  const [card_groups, setCardGroups] = useState([]);

  useEffect(() => {
    api.getApiData().then((response) => {
      setCardGroups(response.data.card_groups);
    });
  }, []);
  const handleRefresh = () => {
    window.location.reload(true);
  };
  return (
    <div className="App">
      <BrowserView>
        <h3 style={{ textAlign: "center" }}>
          Website only supported for mobile. Please inspect the website and
          refresh for the same or view in mobile.
        </h3>
      </BrowserView>
      <MobileView>
        <NavBar></NavBar>
        <PullToRefresh onRefresh={handleRefresh}>
          {card_groups.map((value, index) => {
            switch (value.design_type) {
              case "HC6":
                return <H6Card data={value} key={index}></H6Card>;

              case "HC9":
                return <H9Card data={value}  key={index}></H9Card>;
              case "HC1":
                if (value.is_scrollable) {
                  return <H1CardScrollable data={value}  key={index}></H1CardScrollable>;
                } else {
                  return <H1Card data={value}  key={index}></H1Card>;
                }

              case "HC5":
                return <H5Card data={value}  key={index}></H5Card>;
              case "HC3":
                return <H3Card data={value}  key={index}></H3Card>;
              default:
                break;
            }
          })}
        </PullToRefresh>
      </MobileView>
    </div>
  );
}

export default App;
