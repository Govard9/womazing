import '../index.css';
import Navigation from "./NavMenu";
import TextHeader from "./TextHeader";
import ImageHeader from "./ImageHeader";

function App(props) {
  return (
    <>
      <section className="nav">
        <Navigation />
      </section>
      <section className="header">
        <TextHeader/>
        <ImageHeader/>
      </section>
    </>
  );
}

export default App;
