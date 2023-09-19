import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleIndicator = (index) => {
    setActiveItem(index);
  };

  const navItems = [
    { label: "Contact", name: "/contact" },
    { label: "Blog", name: "/blog" },
    { label: "Projects", name: "/projects" },
    { label: "Home", name: "/" },
  ];
  return (
    <>
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
    </>
  );
};

export default Navbar;
