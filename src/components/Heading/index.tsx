import type React from "react";
import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

function Heading({ children }: HeadingProps) {
  console.log({ children });

  return <h1 className={styles.heading}>{children}</h1>;
}

export default Heading;
