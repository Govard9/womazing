import '../index.css';
import NavMenu from "./HomePage/NavigationMenu/NavMenu";
import Text from "./HomePage/HomeHeader/Text";
import Images from "./HomePage/HomeHeader/Images";
import NewCollection from "./HomePage/MainContent/NewCollection";
import Important from "./HomePage/MainContent/Important";
import DreamTeam from "./HomePage/MainContent/DreamTeam";

function App(props) {
  return (
    <>
      <nav className="nav">
        <NavMenu/>
      </nav>
      <header className="header">
        <Text/>
        <Images/>
      </header>
      <main className="content">
        <NewCollection/>
        <Important/>
        <DreamTeam/>
      </main>
    </>
  );
}

export default App;
