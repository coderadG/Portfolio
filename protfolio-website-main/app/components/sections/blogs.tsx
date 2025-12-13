import styles from "./blogs.module.css";

const Education = () => {
    const education = [
        {
            year: "2024 – 2028",
            title: "B.Tech in Electrical Engineering",
            institution: "Indian Institute of Technology (IIT) Delhi",
            description: "CGPA: 8.6"
        },
        {
            year: "2024",
            title: "JEE Advanced",
            institution: "All India Rank 4925",
            description: "Secured AIR 4925 among 180,000+ eligible candidates."
        },
        {
            year: "2024",
            title: "JEE Main",
            institution: "99.33 Percentile",
            description: "Secured 99.33 percentile among 1 million+ candidates."
        },
        {
            year: "2024",
            title: "Class XII (Science)",
            institution: "Vardhman Academy, Meerut",
            description: "98.8% | District Topper"
        },
        {
            year: "2022",
            title: "Class X",
            institution: "Vardhman Academy, Meerut",
            description: "99.4%"
        }
    ];

    return (
        <section id="education" className={styles.blogs}>
            <div className={styles.container}>
                <h1 className={styles.title}>Education</h1>
                <p className={styles.subtitle}>
                    Academic milestones and achievements
                </p>

                <div className={styles.blogsGrid}>
                    {education.map((item, index) => (
                        <article key={index} className={styles.blogCard}>
                            <div className={styles.blogContent}>
                                <span
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "0.9rem",
                                        opacity: 0.85
                                    }}
                                >
                                    {item.year}
                                </span>

                                <h2
                                    className={styles.blogTitle}
                                    style={{ color: "#ffffff" }}
                                >
                                    {item.title}
                                </h2>

                                <h4
                                    style={{
                                        color: "#d1d5db",
                                        fontWeight: 500,
                                        marginTop: "4px"
                                    }}
                                >
                                    {item.institution}
                                </h4>

                                <p
                                    className={styles.blogDescription}
                                    style={{ color: "#e5e7eb" }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
