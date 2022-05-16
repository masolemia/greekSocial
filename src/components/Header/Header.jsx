import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://banner2.cleanpng.com/20180712/vye/kisspng-greek-cuisine-dionisos-urgell-restaurant-gastronom-greek-food-5b479eb5a0db78.1175967415314203416589.jpg"
        alt="logo"
        width={100}
      />
    </header>
  );
};

export default Header;
