import logo from './PLACEHOLDER.png';
import './App.scss';
import './ContactForm'
import ContactForm from './ContactForm';
import PromoCard from './promo-card/PromoCard';

import {ReactComponent as IconInsta} from './icon_insta.svg';
import {ReactComponent as IconFb} from './icon_fb.svg';
import {ReactComponent as IconYt} from './icon_yt.svg';
import {ReactComponent as IconSpotify} from './icon_spotify.svg';
import {ReactComponent as IconApple} from './icon_apple.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><p>HOME</p></li>
            <li><p>STORE</p></li>
            <li><img src={logo} className="App-logo" alt="logo" /></li>
            <li><p>SOCIAL</p></li>
            <li><p>CONTACT</p></li>
          </ul>
        </nav>
      </header>
      <body>
        <div className="hero-image">
          
          <div className="bg"></div>
          <div className='hero-image_gradient'><img src="statue.png" alt="statue" /></div>
          </div>
        <div className='newsletter-signup'>
          <p className='newsletter-signup-text'>STAY UP TO DATE</p>
          <form className='newsletter-signup-form'>
            <input className='newsletter-signup-input' type="text" placeholder="email address" />
            <button className='newsletter-signup-button'>SUBSCRIBE</button>
          </form>
        </div>
          <main>
          <table className='tour-dates_table'>
            <tr className='tour-dates_table-header'>
              <th>Date</th> 
              <th>Venue Location</th>
              <th>Tickets/RSVP</th>
            </tr>
            <tr>
              <td>AUG 7 2024</td>
              <td>venue @ time<br/>city, country</td>
              <td>
                <button>TICKETS</button>
                <button>RSVP</button>
              </td>
            </tr>
            <tr>
              <td>AUG 15 2024</td>
              <td>venue @ time<br/>city, country</td>
              <td>
                <button>TICKETS</button>
                <button>RSVP</button>
              </td>
            </tr>
            <tr>
              <td>DEC 12 2024</td>
              <td>venue @ time<br/>city, country</td>
              <td>
                <button>TICKETS</button>
                <button>RSVP</button>
              </td>
            </tr>
          </table>
          </main>
          <div>
            <div className='social-links'>
              <ul>  
                <li><a className='social-icon-link ig' href="https://www.instagram.com/wearedps"><IconInsta className='social-icon ig' /></a></li>
                <li><a className='social-icon-link fb' href="https://www.facebook.com/deadpoetsocietyband"><IconFb className='social-icon fb'/></a></li>
                <li><a className='social-icon-link yt' href="https://www.youtube.com/channel/UCSIDln9BMrcXa6Pmeu7NDew"><IconYt className='social-icon yt' /></a></li>
                <li><a className='social-icon-link spotify' href="https://open.spotify.com/artist/31M8EXHYtEqOqVb1X7JRVe"><IconSpotify className='social-icon spotify' /></a></li>
                <li><a className='social-icon-link applemusic' href="https://music.apple.com/us/artist/dead-poet-society/583985425"><IconApple className='social-icon applemusic' /></a></li>
              </ul>
              <p className='social-title'>FOLLOW US</p>
            </div>
          </div>
        </body>
    </div>
  );
}

export default App; 
