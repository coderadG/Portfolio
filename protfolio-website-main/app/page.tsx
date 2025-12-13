import Navbar from "./components/navbar";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Blogs from "./components/sections/blogs";
import styles from "./page.module.css";
import Experience from "./components/sections/experience";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home" className={styles.about}>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
          <div className={styles.circle5}></div>
          <div className={styles.hexagon}></div>
          <div className={styles.diamond}></div>
          <div className={styles.star}></div>
          <div className={styles.pentagon}></div>
          <div className={styles.octagon}></div>
          <div className={styles.rhombus}></div>
          <div className={styles.intro}>
              <h1 className={styles.greeting}>
                  Hi, I&apos;m
              </h1>
              <button className={styles.nameButton}>
                  <span className={styles.nameText}>Radhika Goel</span>
              </button>
          </div>
          <div className={styles.description}>
            <p>
                An aspiring software developer with a passion for building scalable applications and modern AI-powered solutions.
            </p>
          </div>
          <a 
              href="https://drive.google.com/file/d/1sneAg8SmsvQm81MQp5ciFhJIsRSkdzzH/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.resumeButton}
          >
              📄 View Resume
          </a>
      </div>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}
