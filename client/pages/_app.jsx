import Navbar from "../components/shared/Navbar";
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
