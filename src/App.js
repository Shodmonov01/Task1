import Introduction from "./components/Introduction"
import Accessibility from "./components/Accessibility"
import Browsersdevices from "./components/Browsersdevices"
import Contents from "./components/Contents"
import Contribute from "./components/Contribute"
import Dowload from "./components/Dowload"
import JavaScriptt from "./components/JavaScriptt"
import Parcel from "./components/Parcel"
import RFS from "./components/RFS"
import RTL from "./components/RTL"
import Vite from "./components/Vite"
import Webpack from "./components/Webpack"
function App () {
  return(
    <div className="wrapper">
      <ul>
        <Introduction />
        <Accessibility />
        <Browsersdevices />
        <Contents />
        <Contribute />
        <Dowload />
        <JavaScriptt />
        <Parcel />
        <RFS />
        <RTL />
        <Vite />
        <Webpack />
      </ul>
    </div>
  );
}

export default App