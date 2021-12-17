import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

library.add(faClipboard);

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Allows to clear out form and query top100 when this updates
  const [reloadToggle, setReloadToggle] = useState(false);

  const toggle = () => {
    setReloadToggle((prevState) => !prevState);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <div className="container mx-auto">
        <Component {...pageProps} reloadToggle={reloadToggle} />
      </div>
    </div>
  );
}

export default MyApp;
