import React from "react";
import styles from "./Header.module.css";

import LanguageSelector from "../../features/locale/components/LanguageSelector";
import ThemeSelector from "../../features/themes/components/ThemeSelector";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo"></div>
      <LanguageSelector />
      <ThemeSelector />
    </header>
  );
};

export default Header;
