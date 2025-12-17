import styles from "./Heading.module.css";

function Heading() {
  return (
    <h1 className={`${styles.cyan} ${styles.heading}`}>Ola mundo do app</h1>
  );
}

export default Heading;
