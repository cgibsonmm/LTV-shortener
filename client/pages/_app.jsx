import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faClipboard, fab, faLinkedin);

import "../styles/globals.css";
import Footer from "../components/shared/Footer";

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
      <Footer />
    </div>
  );
}

export default MyApp;
