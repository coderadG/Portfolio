import Image from "next/image";
import styles from "./projects.module.css";

const Projects = () => {
    const projects = [
        {
            title: "SparkChat",
            description: "Built and deployed a full-stack real-time chat web application with secure authentication, token refresh, and scalable messaging. Supports one-to-one messaging with persistent chat history and production-grade deployment.",
            image: "/images/sparkchat.png",
            skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "Axios"],
            liveDemo: "https://spark-chat-gamma.vercel.app/login",
            githubFrontend: "",
            githubBackend: "",
            achievements: [
                "Implemented JWT-based authentication with access and refresh token flow for secure sessions",
                "Built real-time messaging with optimized API design and persistent MongoDB storage",
                "Integrated Axios interceptors for automatic token attachment and retry logic",
                "Deployed frontend on Vercel and backend on Render with environment-based configuration"
            ]
        },

        {
            title : "SocialNet",
            description: "Developed a console-based social networking system in C++ that supports user management, friend suggestions, degrees of separation, and post management with chronological ordering using AVL Trees. Implemented efficient algorithms for friend recommendations and real-time post retrieval.",
            image: "/images/SocialNet.jpeg",
            skills: ["C++", "Data Structures", "AVL Trees", "Graphs", "Algorithms"],
            liveDemo: "",
            githubFrontend: "",
            githubBackend : "https://github.com/coderadG/SocialNet",
            achievements: [
                "Implemented an AVL Tree to maintain and retrieve user posts in chronological order with O(log n) insertion and traversal.",
                "Developed a friend suggestion system based on mutual friends with sorting by maximum connections.",
                "Implemented degrees of separation calculation using BFS for efficient social graph analysis.",
                "Handled user management with input validation, case-insensitive username handling, and error reporting."
            ]
        }
,
        {
            title: "Versioned File System",
            description: "Developed a C++ console-based version-controlled file system supporting multi-version management, snapshots, rollbacks, and efficient retrieval of recent and largest files using custom hash maps and max-heaps.",
            image: "/images/versionedfilesystem.jpeg",
            skills: ["C++", "Data Structures", "Hash Maps", "Heaps", "Tree Structures", "File Versioning", "Algorithms"],
            liveDemo: "",
            githubFrontend: "",
            githubBackend: "https://github.com/coderadG/VersionedFileSystem",
            achievements: [
                "Implemented custom hash maps for integer and string keys to efficiently manage file versions and filenames.",
                "Designed a tree-based versioning system with snapshots and rollback functionality for each file.",
                "Tracked recent files and largest version trees using max-heaps for fast retrieval of top-K queries.",
                "Handled real-time updates, inserts, and content edits while maintaining version history efficiently.",
                "Supported user-friendly commands for CREATE, READ, INSERT, UPDATE, SNAPSHOT, ROLLBACK, HISTORY, and listing RECENT and BIGGEST files."
    ]
}

    ];

    return (
        <div id="projects" className={styles.projects}>
            <h1>Projects</h1>
            <p>Some of the things I&apos;ve built.</p>
            <div className={styles.projectsContainer}>
                {projects.map((project) => (
                    <div key={project.title} className={styles.project}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={200}
                            className={styles.projectImage}
                        />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className={styles.skills}>
                            {project.skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                        
                        {project.achievements && (
                            <div className={styles.achievements}>
                                {project.achievements.map((achievement, achIndex) => (
                                    <div key={achIndex} className={styles.achievement}>
                                        <span className={styles.bullet}>•</span>
                                        <span>{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        <div className={styles.links}>
                            {project.liveDemo && (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    {project.title === "BytePad" ? "Play Store" : "Live Demo"}
                                </a>
                            )}
                            {project.githubFrontend && (
                                <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                                    {project.githubBackend ? "Frontend" : "GitHub"}
                                </a>
                            )}
                            {project.githubBackend && (
                                <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                                    Backend
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className={styles.viewAllContainer}>
                <a 
                    href="https://github.com/lakshya1goel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.viewAllButton}
                >
                    See All Projects →
                </a>
            </div>
        </div>
    );
};

export default Projects;