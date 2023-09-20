import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isMenuButtonActive, setIsMenuButtonActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleIndicator = (index) => {
    setActiveItem(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMenuButtonActive(!isMenuButtonActive);
  };

  const navItems = [
    { label: "Contact", name: "/contact" },
    { label: "Blog", name: "/blog" },
    { label: "Projects", name: "/projects" },
    { label: "Home", name: "/" },
  ];

  return (
    <>
      <button
        className={`${styles["menu-button"]} ${
          isMenuButtonActive ? styles["close-button"] : ""
        } mt-3 ml-4`}
        onClick={toggleMobileMenu}
      >
        {isMenuButtonActive ? <CloseIcon /> : <MenuIcon />}
      </button>
      <nav className={`${styles.nav}`}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.name}
            className={`${styles["nav-item"]} ${
              activeItem === index ? styles["is-active"] : ""
            }`}
            onClick={() => handleIndicator(index)}
            style={{ color: item.color }}
          >
            {item.label}
            {activeItem === index && (
              <span className={styles["nav-indicator"]}></span>
            )}
          </NavLink>
        ))}
      </nav>
      {/* Mobile Menu */}
      <div
        className={`${styles["mobile-menu"]} ${
          isMobileMenuOpen ? styles["mobile-menu-open"] : ""
        }`}
      >
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.name}
            className={styles["mobile-menu-item"]}
            onClick={() => {
              toggleMobileMenu();
              handleIndicator(index);
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
