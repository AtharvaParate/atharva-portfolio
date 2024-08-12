import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/finalProfilePic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Atharva_Parate_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Atharva AI"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Atharva
          <br />
          Parate
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/atharvaparate/" target="_blank">
            <img src={linkedInIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/AtharvaParate" target="_blank">
            <img src={githubIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
          Dedicated to building robust, scalable full stack solutions that
          creates an impact.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
