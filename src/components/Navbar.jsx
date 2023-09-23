import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const menuRef = useRef(null);

  const handleIndicator = (index) => {
    setActiveItem(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "Blog", name: "/blog" },
    { label: "Experience", name: "/experience" },
    { label: "Work", name: "/work" },
    { label: "Home", name: "/" },
  ];

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsMobileMenuOpen(false);
  //     }
  //   }

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      <button
        className={`${styles["menu-button"]} ${
          isMobileMenuOpen ? styles["close-button"] : ""
        } mt-3 ml-4`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={`${styles.nav}`}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.name}
            className={`${styles["nav-item"]} ${
              activeItem === index ? styles["is-active"] : ``
            }`}
            onClick={() => handleIndicator(index)}
          >
            {item.label}
            {activeItem === index && (
              <span className={styles["nav-indicator"]}></span>
            )}
          </NavLink>
        ))}
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`${styles["mobile-menu"]} ${
            isMobileMenuOpen ? styles["mobile-menu-open"] : ""
          }`}
        >
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.name}
              className={`${styles["mobile-menu-item"]} `}
              onClick={() => {
                toggleMobileMenu();
                handleIndicator(index);
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
