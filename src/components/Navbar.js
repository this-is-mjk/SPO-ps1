import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAMAAADdXFNzAAAAMFBMVEVHcEw2K3o2K3o2K3o2K3o2K3o2K3o2K3o2K3o2K3o2K3o2K3o2K3o2K3o2K3o2K3rW92t9AAAAD3RSTlMApfJ7MJLk2iC4Uj3MaxClh4NFAAABF0lEQVQokX2T27aFIAhFBTXNG///t0cBd2qjw0OjnFwWYMYc5hDrebYadbPf2A1O7ZNn5v6TR+bl//p0fXN7xveMm0PofO2wEOXNwQeVFzBKQTe+WrIeAHx1i5R+zE8HSI9d3imv41ljoNOwz9AT3T00dckFysulGhzcQH8fQtKZJbRRhxsWQXXToMfsqYrdIqDJOYffs6X8cDM6SubeOIvRFQCDa+dm8sKZUb7Dw71yELXq//Ap0XL8ZaRp9yqQOROoIP/ivNjulc8Cs7whuUfXkUB45PJj7HIjfwqchjea/0ESB73zVoYz0oKGJB0oG4qasA7NzZq6gNjwiWa7dSY8jnFh+mY2c/dv6UhHsFq2UBAJAyyxf7tvGTB9Rns5AAAAAElFTkSuQmCC"></img>
      <p>Students' Placement Office</p>
      <a href="#placementSection">Placement</a>
      <a href="#resources">Resources</a>
      <a href="#faq">FAQ</a>
    </nav>
  );
};

export default Navbar;
