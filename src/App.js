import QRCode from "./components/qrCode";
import ldlogo from "./ld-light.png";
import toggle from "./toggle_thumbsup.png";
import "./App.css";
import { useFlags } from "launchdarkly-react-client-sdk";
import Header from "./components/header";
import Login from "./components/login";
import Intro from "./components/intro";
import Release from "./components/release";

function App() {
  const { upperimage, cardshow, prodHeader } = useFlags();
  console.log("upperimage", upperimage);
  return (
    <div className="App h-screen bg-ldls bg-cover bg-no-repeat">
      {prodHeader ? (
        <div className="grid h-screen grid-cols-4 grid-rows-4 xl:grid-rows-3 items-center">
          <div className="body row-start-4 xl:row-start-2 col-start-2 col-span-2 xl:col-span-1 xl:col-start-1 bg-black-4">
            <Login />
          </div>
          <header className="App-header row-start-1 xl:row-start-2 col-span-4 xl:col-span-3 xl:col-start-2 body grid">
            <Header />
          </header>
          {upperimage ? (
            <div className="body grid row-start-2 col-span-4 xl:col-span-3 xl:col-start-2 xl:row-start-1 items-center">
              <img src={ldlogo} className="App-pulse mx-auto h-56 lg:h-60 2xl:h-75" alt="logo" />
            </div>
          ) : null}
          {cardshow ? (
            <div className="body grid row-start-3 col-span-4 xl:col-start-2 xl:col-span-3 xl:row-start-3 items-center">
              <Release />
            </div>
          ) : null}
        </div>
      ) : (
        <div className="grid h-screen grid-rows-3 grid-cols-4 items-center">
          <div className="col-start-1 col-span-4 row-start-2">
            <div className="body bg-ldgray px-8 py-4 mb-5 w-full shadow-2xl">
              <p className="text-m xl:text-4xl">
                Welcome to <span className="text-ldyellow">Beyond Continuous Delivery</span>{" "}
              </p>
              <p className="text-m xl:text-4xl">
                with <span className="text-ldyellow">LaunchDarkly</span> and <span className="text-aws">AWS</span>
              </p>
            </div>
            <Intro />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
