import styles from "./page.module.css";

const Homepage = () => {
  return (
    <section className={styles.fold}>
      <h1>Welcome to the Taco Motor UI</h1>
      <h3>Here you&apos;ll find a sample app that consumes an API</h3>
      <p>Navigate with the links on the navbar above</p>
    </section>
  );
};

export default Homepage;
