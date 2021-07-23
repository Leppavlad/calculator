import React from "react";
import styles from "./Header.module.css";

import LanguageSelector from "../../features/locale/components/LanguageSelector";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo"></div>
      <LanguageSelector />
    </header>
  );
};

export default Header;
