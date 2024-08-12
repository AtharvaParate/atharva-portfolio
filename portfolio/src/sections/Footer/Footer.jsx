import styles from "./FooterStyle.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Atharva Parate.
        <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
