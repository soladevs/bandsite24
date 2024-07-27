import logo from './dps.png';
import statue from './statue.png';
import './App.scss';

import {ReactComponent as IconInsta} from './icon_insta.svg';
import {ReactComponent as IconFb} from './icon_fb.svg';
import {ReactComponent as IconYt} from './icon_yt.svg';
import {ReactComponent as IconSpotify} from './icon_spotify.svg';
import {ReactComponent as IconApple} from './icon_apple.svg';
import ContactForm from './ContactForm';
import NavBar from './NavBar';


const Contact = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar active='contact'/>
      </header>
      <body>
        <div className="hero-image">
          
          <div className="bg"></div>
          <div className='hero-image_gradient'><img src={statue} alt="statue" /></div>
          </div>
          <main className='contact'>
              <div className='contact-form management'>
                <p className='management-title'>Management</p>
                <p className='management-name'>Name Here</p>
                <p className='management-email'>manager@example.com</p>
              </div>
              <div>
                <ContactForm />
              </div>
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
              <p className='social-title'>DEAD POET SOCIETY</p>
            </div>
          </div>
        </body>
    </div>
  );
}

export default Contact; 

 
