import React, { useState } from "react";

import Local from "../../icons/Local";
import Logo from "../../icons/Logo";
import MagnifyingGlass from "../../icons/MagnifyingGlass";

import styles from "./Header.module.css";

interface IHeaderProps {
  currentLocation?: string;
}

const Header: React.FC<IHeaderProps> = ({ currentLocation = "São Paulo" }) => {
  const [searchText, setSearchText] = useState("");
  const [isSearchVisible, setSearchVisible] = useState(true);

  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.searchAndLocalWrapper}>
          {isSearchVisible && (
            <input
              className={styles.searchInput}
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              onKeyDown={({ keyCode }) => {
                if (keyCode === 13) {
                  window.alert("trigger search");
                }
              }}
              type="text"
            />
          )}

          <div
            className={styles.magnifyingGlassWrapper}
            onClick={() => {
              setSearchVisible(!isSearchVisible);

              if (searchText) {
                window.alert("trigger search");
              }
            }}
          >
            <MagnifyingGlass />
          </div>

          <span className={styles.location}>{currentLocation}</span>
          <div className={styles.locationWrapper}>
            <Local />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
