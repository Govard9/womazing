import '../index.css';
import Navigation from "./NavMenu";
import TextHeader from "./TextHeader";

function App(props) {
  return (
    <>
      <section className="header">
        <Navigation />
        <TextHeader/>
      </section>
    </>
  );
}

export default App;
