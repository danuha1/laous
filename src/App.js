import "./App.css";
import Footer from "./components/Header/Footer";
import City from "./components/City/City";
import classes from "./components/Header/Header.module.css";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "use-local-storage";
import Admin from "./components/admin/Admin";
const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [changeLogo, setChangeLogo] = useState(true);
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (changeLogo === true) {
      setChangeLogo(false);
    } else {
      setChangeLogo(true);
    }
  };
  const refreshPage = () => {
    window.location.reload(false);
  };

  const admin = () => {
    setShow(false);
    setShow1(true);
  };
  async function addCityHandler(city) {
    const response = await fetch(
      "https://gala-darbs-2b35e-default-rtdb.firebaseio.com/Cities.json",
      {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  async function addObjectHandler(object) {
    const response = await fetch(
      "https://gala-darbs-2b35e-default-rtdb.firebaseio.com/Object.json",
      {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  async function addDetailsHandler(details) {
    const response = await fetch(
      "https://gala-darbs-2b35e-default-rtdb.firebaseio.com/Details.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="App" data-theme={theme}>
      <div>
        <div>
          <header className={classes.header}>
            <a onClick={refreshPage} className={classes.logo}>
              <img src={require("./components/Images/logoDark.png")} />
            </a>
            <a className={classes.navA} onClick={admin}>
              Latvijas apskates objektu uzskaites sistēma
            </a>
            <nav className={classes.navbar}>
              <a>
                <UserOutlined />
              </a>
              <button onClick={switchTheme} className="button">
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </nav>
          </header>
        </div>
      </div>
      <div>
        {show && <City />}
        {show1 && (
          <Admin
            onAddCity={addCityHandler}
            onAddObject={addObjectHandler}
            onAddDetails={addDetailsHandler}
          />
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
