import type React from "react";
import styles from "./Heading.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

function Heading({ children }: HeadingProps) {
  console.log({ children });

  return <h1 className={styles.heading}>{children}</h1>;
}

export default Heading;
