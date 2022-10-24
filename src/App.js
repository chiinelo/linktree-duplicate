// import logo from './logo.svg';
import "./App.css";
import landingPage from "../src/styles/landingPage.css";

function App() {
  return (
    <div className="App">
      <div className="landing-page container-fluid">
        <div className="profile">
          <img
            src="../images/profile__img.svg"
            alt="profile-img"
            id="profile__img"
          />
          <p id="twitter" className="profile_name">
            Annette Black
          </p>
        </div>
        <div className="links-group">
          <button className="links">
            <a href="" className="link-texts">
              Twitter Link
            </a>
          </button>
          <button className="links" id="btn__zuri">
            <a href="https://training.zuri.team/" className="link-texts">
              Zuri Team
            </a>
          </button>
          <button className="links" id="books">
            <a href="http://books.zuri.team/" className="link-texts">
              Zuri Books
            </a>
          </button>
          <button className="links" id="book__python">
            <a href="https://books.zuri.team/" className="link-texts">
              Python Books
            </a>
          </button>
          <button className="links" id="pitch">
            <a href="https://background.zuri.team/" className="link-texts">
              Background Check for Coders
            </a>
          </button>
          <button className="links" id="book__design">
            <a
              href="https://books.zuri.team/design-rules"
              className="link-texts"
            >
              Design Books
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
