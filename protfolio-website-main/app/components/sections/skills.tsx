import Image from "next/image";
import styles from "./skills.module.css";

const Skills = () => {
    const frontendSkills = [
        {
            name: "Kotlin",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        },
        {
            name: "Jetpack Compose",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" // placeholder
        },
        {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
            name: "HTML/CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            name: "CLI Design",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
        }
    ];

    const backendSkills = [
        {
            name: "C++",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        },
        {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        },
        {
            name: "LangChain",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" // placeholder for AI
        }
    ];

    const databaseSkills = [
        {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        },
        {
            name: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
        },
        {
            name: "Custom Data Structures",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" // placeholder
        }
    ];

    const toolsSkills = [
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        },
        {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        },
        {
            name: "Vercel",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
        },
        {
            name: "Git/GitHub",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        },
        {
            name: "Android Studio",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
        },
        {
            name: "Postman",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        },
        {
            name: "Groq & Gemini APIs",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" // placeholder
        }
    ];

    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>My Skills</h1>
                <div className={styles.skillsGrid}>
                    {[
                        { title: "Frontend", skills: frontendSkills },
                        { title: "Backend", skills: backendSkills },
                        { title: "Database", skills: databaseSkills },
                        { title: "Tools", skills: toolsSkills },
                    ].map((category, idx) => (
                        <div key={idx} className={styles.skill}>
                            <h1 className={styles.skillTitle}>{category.title}</h1>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <Image src={skill.icon} alt={skill.name} width={24} height={24} />
                                        <h2>{skill.name}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
