import React, {useState} from 'react';
import './Footer.css';


function Footer() {
  const [show, setShow] = useState(false);

  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Rahul Ratwatte © 2020</small>
          <div class='social-icons'>
            <a href="https://www.instagram.com/ratwhat/?hl=en" class='social-icon-link facebook' target='_blank' aria-label='Facebook'>
              <i class='fab fa-instagram' />
            </a>
            <a href="https://uk.linkedin.com/in/rahul-ratwatte-664256138"
              class='social-icon-link twitter'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
          <div className="attribution">
            <small onClick={() =>(setShow(!show))}>Image Attribution</small>
          </div>
        </div>
      </section>
      <div className={show ? 'iconAttributionBar' : 'noAttribution'}>
        <a href="https://iconscout.com/icons/git-community" target="_blank">Git community Icon</a> by <a href="https://iconscout.com/contributors/WHCompare">Alexiuz AS</a> on <a href="https://iconscout.com">Iconscout, </a>
        <a href="https://iconscout.com/icons/documentation" target="_blank">Documentation Icon</a> by <a href="https://iconscout.com/contributors/hana-arif">Vectors Point</a> on <a href="https://iconscout.com">Iconscout, </a>
        <a href="https://iconscout.com/icons/user-story" target="_blank">User story Icon</a> by <a href="https://iconscout.com/contributors/sbts2018" target="_blank">SBTS, </a>
        <a href="https://iconscout.com/icons/testing" target="_blank">Testing Icon</a> by <a href="https://iconscout.com/contributors/bzzricon" target="_blank">BZZRICON Studio, </a>
        <a href="https://iconscout.com/icons/python" target="_blank">Python Icon</a> by <a href="https://iconscout.com/contributors/icons8" target="_blank">Icons8, </a>
        <a href="https://iconscout.com/icons/java" target="_blank">Java Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout, </a>
        <a href="https://iconscout.com/icons/html" target="_blank">Html Logo Icon</a> by <a href="https://iconscout.com/contributors/jagathish" target="_blank">Jagathish Saravanan, </a>
        <a href="https://iconscout.com/icons/javascript" target="_blank">Javascript Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia, </a>
        <a href="https://iconscout.com/icons/node-js" target="_blank">Node Js Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia, </a>
        <a href="https://iconscout.com/icons/express" target="_blank">Express Logo Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia,</a>
        <a href="https://iconscout.com/icons/unity" target="_blank">Unity Icon</a> by <a href="https://iconscout.com/contributors/icons8">Icons8</a> on <a href="https://iconscout.com">Iconscout, </a>    
        <a href="https://iconscout.com/icons/c" target="_blank">C Icon</a> by <a href="https://iconscout.com/contributors/icons8">Icons8</a> on <a href="https://iconscout.com">Iconscout, </a>
        <a href="https://iconscout.com/icons/react" target="_blank">React Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia, </a>
        <a href="https://iconscout.com/icons/react" target="_blank">React Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia, </a>
        <a href="https://iconscout.com/icons/agile-iteration" target="_blank">Agile Iteration Icon</a> by <a href="https://iconscout.com/contributors/promotion-king" target="_blank">Rank Sol</a>
      </div>
    </div>
    
  );
}

export default Footer;
