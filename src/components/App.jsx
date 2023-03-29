import '../index.css';
import NavMenu from "./NavigationMenu/NavMenu";
import Text from "./HomePage/HomeHeader/Text";
import Images from "./HomePage/HomeHeader/Images";
import NewCollection from "./HomePage/MainContent/NewCollection";
import Important from "./HomePage/MainContent/Important";
import DreamTeam from "./HomePage/MainContent/DreamTeam";
import Footer from "./Footer/Footer";

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
      <footer className="footer">
        <Footer/>
      </footer>
    </>
  );
}

export default App;
