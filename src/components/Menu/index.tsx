import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

function Menu() {
  return (
    <div className={styles.menu}>
      <a href="#" className={styles.linkMenu}>
        <HouseIcon />
      </a>

      <a href="#" className={styles.linkMenu}>
        <HistoryIcon />
      </a>

      <a href="#" className={styles.linkMenu}>
        <SettingsIcon />
      </a>

      <a href="#" className={styles.linkMenu}>
        <SunIcon />
      </a>
    </div>
  );
}

export default Menu;
