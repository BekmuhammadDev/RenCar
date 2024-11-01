import React from 'react';
import './style.scss'; 

function Footer() {
  return (
    <footer className="footer">
     <div className="container mx-auto p-6">

     <div className="footer-top">
        <div className="footer-logo">
          <h2 className='font-bold'>zetmarket</h2>
          <p className='text-base font-medium '>Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h1 className='font-bold'>About</h1>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="footer-column">
            <h1 className='font-bold'>Community</h1>
            <ul>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="footer-column">
            <h1 className='font-bold'>Socials</h1>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="footer-bottom-links flex pr-8">
          <p className='font-medium text-black'>Privacy & Policy</p>
          <p className='font-medium text-black'>Terms & Condition</p>
        </div>
      </div>
     </div>

    </footer>
  );
}

export default Footer;
