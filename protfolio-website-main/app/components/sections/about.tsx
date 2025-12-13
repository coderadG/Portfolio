import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
    return (
        <div id="about" className={styles.about}>
            <Image
                src="/images/pic.jpeg"
                alt="About"
                width={200}
                height={200}
                className={styles.aboutImage}
            />

            <div className={styles.aboutContent}>
                <h1 className={styles.title}>
                    I'm <span className={styles.highlight}>Radhika Goel</span>, a software developer passionate about building reliable and real-world applications. 
                </h1>

                <p className={styles.description}>
                    I am an undergraduate at IIT Delhi with a strong foundation in data structures, algorithms, and object-oriented programming. I'm passionate about solving complex problems, optimizing systems, and delivering impactful software.
                </p>

                <p className={styles.description}>
                    I have experience with <span className={styles.techStack}>C++</span>, <span className={styles.techStack}>Python</span>, <span className={styles.techStack}>MongoDB</span>, <span className={styles.techStack}>REST APIs</span>, and <span className={styles.techStack}>Git</span>. I am also exploring <span className={styles.techStack}>Kotlin</span>, <span className={styles.techStack}>Jetpack Compose</span>, and <span className={styles.techStack}>Generative AI</span> using <span className={styles.techStack}>LangChain</span>, building modern, scalable, and AI-powered applications.
                </p>

            </div>
        </div>
    );
};

export default About;
