import Navbar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner2/Banner2";
import Banner3 from "./components/Banner3/Banner3";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidde">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
};

export default App;
