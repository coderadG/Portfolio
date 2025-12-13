import styles from "./experience.module.css";

const Experience = () => {
    const experiences = [
        // ===== ACHIEVEMENTS =====
        {
            company: "NXP India – Women in Tech (WIT)",
            position: "Scholar / Mentee",
            duration: "2025",
            location: "India",
            technologies: ["Mentorship", "Industry Exposure"],
            achievements: [
                "Selected among the Top 75 students from 18,000+ applicants nationwide.",
                "Engaged in mentorship sessions and industry-led technical discussions."
            ]
        },
        {
            company: "Foundation for Excellence (FFE)",
            position: "Scholar",
            duration: "2024",
            location: "IIT Delhi",
            technologies: ["Academic Excellence"],
            achievements: [
                "Awarded FFE Scholarship by IIT Delhi Alumni Association for academic merit."
            ]
        },
        {
            company: "Reliance Foundation",
            position: "Undergraduate Scholar",
            duration: "2024",
            location: "India",
            technologies: ["Merit-Based Scholarship"],
            achievements: [
                "Selected as Reliance Foundation Scholar for consistent academic performance."
            ]
        },

        // ===== POSITIONS OF RESPONSIBILITY =====
        {
            company: "DevClub, IIT Delhi",
            position: "Technical Executive",
            duration: "Present",
            location: "IIT Delhi",
            technologies: ["Mentorship", "Workshops", "Community Building"],
            achievements: [
                "Facilitating mentorship between junior students and senior developers.",
                "Organizing technical workshops, coding sessions, and peer-learning events."
            ]
        },
        {
            company: "Electrical Engineering Society (EES)",
            position: "Outreach & Networking Executive",
            duration: "Present",
            location: "IIT Delhi",
            technologies: ["Event Management", "Coordination"],
            achievements: [
                "Planned and executed academic seminars and industry guest lectures.",
                "Coordinated with faculty, speakers, and student teams."
            ]
        },
        {
            company: "BloodConnect",
            position: "Volunteer & HR Executive",
            duration: "Present",
            location: "Delhi NCR",
            technologies: ["Operations", "HR", "Volunteer Management"],
            achievements: [
                "Managed logistics for blood donation camps.",
                "Handled volunteer onboarding and emergency helpline operations."
            ]
        }
    ];

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h1 className={styles.title}>Achievements & Positions of Responsibility</h1>
                <p className={styles.subtitle}>
                    Scholarships, leadership roles, and campus involvement
                </p>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}>
                                <div className={styles.timelineDot}></div>
                            </div>

                            <div className={styles.timelineContent}>
                                <div className={styles.experienceCard}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.companyInfo}>
                                            <h2 className={styles.company}>{exp.company}</h2>
                                            <h3 className={styles.position}>{exp.position}</h3>
                                        </div>
                                        <div className={styles.experienceDetails}>
                                            <span className={styles.duration}>{exp.duration}</span>
                                            <span className={styles.location}>📍 {exp.location}</span>
                                        </div>
                                    </div>

                                    <div className={styles.technologies}>
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className={styles.tech}>{tech}</span>
                                        ))}
                                    </div>

                                    <div className={styles.achievements}>
                                        {exp.achievements.map((item, i) => (
                                            <div key={i} className={styles.achievement}>
                                                <span className={styles.bullet}>•</span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
