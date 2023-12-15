import "./Header.scss";
import React from "react";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  // get user status from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={`Header ${scrolled ? "scrolled" : ""}`}>
      <a className="logo-title secondary" href="/">
        <div className="logo">
          <img src="logo.png" alt="MentorHub logo" />
        </div>
        <span className="title">MentorHub</span>
      </a>

      <div className="links">
        <a className="secondary" href="/groups">
          Groups
        </a>
        <a className="secondary" href="/tutors">
          Tutors
        </a>
        <a className="secondary" href="/messages">
          Messages
        </a>
        {user ? (
          <>
            <a className="secondary" href="/profile">
              Profile
            </a>
            <a className="secondary" href="/logout">
              Logout
            </a>
          </>
        ) : (
          <>
            <a className="secondary" href="/login">
              Login
            </a>
          </>
        )}
      </div>

      <button className="menu-button" onClick={openMenu} type="button">
        <div className="menu-icon">
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </div>
      </button>

      <div className={`menu ${menuOpen ? "open" : "closed"}`}>
        <button className="close-menu" onClick={closeMenu} type="button">
          &times;
        </button>
        <a className="secondary" href="/groups">
          Groups
        </a>
        <a className="secondary" href="/tutors">
          Tutors
        </a>
        <a className="secondary" href="/messages">
          Messages
        </a>
        {user ? (
          <>
            <a className="secondary" href="/profile">
              Profile
            </a>
            <a className="secondary" href="/logout">
              Logout
            </a>
          </>
        ) : (
          <>
            <a className="secondary" href="/login">
              Login
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
