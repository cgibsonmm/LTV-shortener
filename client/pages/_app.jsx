import Navbar from "../components/shared/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

library.add(faClipboard);

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
