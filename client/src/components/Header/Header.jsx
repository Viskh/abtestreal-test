import React from "react";
import styles from "./header.module.css";
import avatar from '../../assets/Ellipse.png'
import signImg from '../../assets/Vector.svg'
import search from '../../assets/search.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo__search}>
        <h1>ab test real</h1>
        <div className={styles.header__search}>
          <img src={search} alt='' />
        <input type="search" />
        </div>
        
      </div>
      <div className={styles.header__sign}>
        <div className={styles.sign__avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.sign__btn}>
          <img src={signImg} alt="signImg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
