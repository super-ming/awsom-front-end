import React from 'react';

const SocialMedia = () => (
  <div className="app__socialmedia">
    <div className="app_container">
      {/* using font awesome CDN for icons - See app/styles/variables/_typography.scss for info */}
      <span className="fa-stack fa-2x">
        <a href="https://www.facebook.com/awsomWA" target="_blank">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-facebook-f fa-stack-1x" />
        </a>
      </span>
      <span className="app__tab" />
      <span className="fa-stack fa-2x">
        <a href="http://www.yelp.com/biz/the-andrew-white-school-of-music-kenmore-3" target="_blank">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-yelp fa-stack-1x" />
        </a>
      </span>
      <span className="app__tab" />
      <span className="fa-stack fa-2x">
        <a href="https://www.instagram.com/awsomusic/" target="_blank">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-instagram fa-stack-1x" />
        </a>
      </span>
      <span className="app__tab" />
      <span className="fa-stack fa-2x">
        <a href="https://www.linkedin.com/company/andrew-white-school-of-music/?trk=biz-companies-cym" target="_blank">
          <i className="fas fa-circle fa-stack-2x" />
          <i className="fab fa-linkedin-in fa-stack-1x" />
        </a>
      </span>
    </div>
  </div>
);

export default SocialMedia;
