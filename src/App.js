import "./App.css";
import Clients from "./component/Clients";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";
import HeroPage from "./component/HeroPage";
import Introduction from "./component/Introduction";
import Navbar from "./component/Navbar";
import Practice from "./component/Practice";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      <Introduction />
      <Practice />
      <Clients />
      <FAQ />
      <Footer/>
    </div>
  );
}

export default App;
