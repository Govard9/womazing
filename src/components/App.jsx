import {useState} from "react";
import '../index.css';
import Text from "./HomePage/HomeHeader/Text";
import Images from "./HomePage/HomeHeader/Images";
import NewCollection from "./HomePage/MainContent/NewCollection";
import Important from "./HomePage/MainContent/Important";
import DreamTeam from "./HomePage/MainContent/DreamTeam";
import Footer from "./Footer/Footer";
import PopupCallback from "./Popup/PopupCallback";
import PopupSuccess from "./Popup/PopupSuccess";
import Navigation from "./NavigationMenu/Navigation";

function App(props) {

  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const handlePopupOpened = () => {
    setPopupIsOpen(true);
  }

  const handlePopupClosed = () => {
    setPopupIsOpen(false);
  }

  return (
    <>
      <nav className="nav">
        <Navigation onPopup={handlePopupOpened} />
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
      <PopupCallback
        isOpen={popupIsOpen}
        onClose={handlePopupClosed}
      />
      <PopupSuccess/>
    </>
  );
}

export default App;
