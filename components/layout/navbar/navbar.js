import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <Link href="/">
        <a className={styles.mobileAnker}>Home</a>
      </Link>
      <Link href="/stories">
        <a className={styles.mobileAnker}>News</a>
      </Link>
      <Link href="/quiz">
        <a className={styles.mobileAnker}>Shop</a>
      </Link>
      <Link href="/species">
        <a className={styles.mobileAnker}>Contact</a>
      </Link>
      <Link href="/games">
        <a className={styles.mobileAnker}>About</a>
      </Link>
    </div>
  );
};

function App() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className={styles.topnav}>
        {/* <div className={styles.logo}>
        </div> */}

        <div className={styles.menu}>
          <Link href="/">
            <a className={styles.anker} >Home</a>
          </Link>
          <Link  href="/fishes">
            <a className={styles.anker}>Fishes</a>
          </Link>
          <Link href="/quiz">
            <a className={styles.anker}>Quiz</a>
          </Link>
          <Link href="/quiz">
            <a className={styles.anker}>Contact</a>
          </Link>
          <Link  href="/sea">
            <a className={styles.anker}>About</a>
          </Link>
        </div>

        <button className={styles.showButton} onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {isShown && <MobileMenu />}
      {isShown && (
        <button className={styles.closeButton} onClick={toggleMobileMenu}>
          &times;
        </button>
      )}

    </>
  );
}

export default App;
