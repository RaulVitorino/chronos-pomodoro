import type React from "react";
import styles from "./styles.module.css";
import { TimerIcon } from "lucide-react";

function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.linkLogo}>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}

export default Logo;
