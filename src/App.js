import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlueCards from "./components/BlueCards";
import Header from "./components/Header";
import YourFault from "./components/YourFault";
import YouGet from "./components/YouGet";
import TargetGroup from "./components/TargetGroup";
import FourthFace from "./components/FourthFace";
import OverEx from "./components/OverEx";
import Lawyer from "./components/Lawyer";
import Request from "./components/Request";
import Footer from "./components/Footer";
import Clint from "./components/Clint";
import BacktoTop from "./components/BacktoTop";

function App() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <YourFault />
      <BlueCards />
      <YouGet />
      <TargetGroup />
      <FourthFace />
      <OverEx />
      <Lawyer />
      <Clint />
      <Request />
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default App;
