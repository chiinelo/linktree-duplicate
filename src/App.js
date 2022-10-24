// import logo from './logo.svg';
import "./App.css";
import landingPage from "../src/styles/landingPage.css";

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <div>
          <img
            src="../images/_Avatar share button1.svg"
            alt=""
            className="desktop-share d-none d-md-block"
          />
          <img
            src="../images/_Avatar share button.svg"
            alt=""
            className="mobile-toggle"
          />
        </div>
        <div className="profile">
          <img
            src="../images/IMG_1404.JPG "
            alt="profile-img"
            id="profile__img"

          />
          <p id="twitter" className="profile_name">
            Chinelo Obigwe
          </p>
        </div>
        <div className="links-group">
          <button className="links">
            <a href="https://twitter.com/chiinelo_" className="link-texts">
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
          <div className="socials d-none d-md-block">
            <img src="../images/slack.svg" id="slack" className="slack" />
            {/* slack name = chinelo.obigwe@yahoo.com */}
            <img src="../images/Social icon.svg" alt="" />
          </div>
          <div className="d-none d-md-block">
            <hr></hr>

            <div className="d-flex justify-content-between pb-5 pt-0">
              <img src="../images/logo.36d2d48a.svg" alt="slack-logo" />
              <p>HNG Internship 9 Frontend Task</p>
              <img src="../images/I4G.svg" alt="github-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
