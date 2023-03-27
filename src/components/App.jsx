import '../index.css';
import Navigation from "./NavMenu";
import Text from "./HomeHeader/Text";
import Images from "./HomeHeader/Images";
import Slider from "./HomeHeader/Slider";

function App(props) {
  return (
    <>
      <section className="nav">
        <Navigation />
      </section>
      <section className="header">
        <Text/>
        <Images/>
      </section>
    </>
  );
}

export default App;
