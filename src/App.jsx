
import "./App.css";
import Footer from './components/Footer/Footer'
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner"
import Main from "./components/Main/Main";

function App() {

  return (
    <>
    <div className="w-full lg:w-11/12 mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Main></Main>
      <Footer></Footer>
    </div>

    </>
  );
}

export default App;
