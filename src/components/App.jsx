import '../index.css';
import Navigation from "./HomePage/NavigationMenu/NavMenu";
import Text from "./HomePage/HomeHeader/Text";
import Images from "./HomePage/HomeHeader/Images";
import NewCollection from "./HomePage/MainContent/NewCollection";

function App(props) {
  return (
    <>
      <nav className="nav">
        <Navigation/>
      </nav>
      <header className="header">
        <Text/>
        <Images/>
      </header>
      <main className="content">
        <NewCollection/>
      </main>
    </>
  );
}

export default App;
