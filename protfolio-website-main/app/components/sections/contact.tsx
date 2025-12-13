import styles from "./contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h1 className={styles.title}>Contact Me</h1>
                <p className={styles.subtitle}>Let&apos;s build something amazing together</p>
                
                <div className={styles.contactContainer}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>Let&apos;s Talk</h3>
                            <p className={styles.infoDescription}>
                                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                            </p>
                            
                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>📧</span>
                                    <div>
                                        <p className={styles.contactLabel}>Email</p>
                                        <a href="mailto:radhikagoel477@gmail.com" className={styles.contactLink}>
                                            radhikagoel477@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>💼</span>
                                    <div>
                                        <p className={styles.contactLabel}>LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/25-radhika-goel/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                            Radhika Goel
                                        </a>
                                    </div>
                                </div>
                                
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>🐙</span>
                                    <div>
                                        <p className={styles.contactLabel}>GitHub</p>
                                        <a href="https://github.com/coderadG" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                            coderadG
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.formContainer}>
                        <form className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.formLabel}>Name <span className={styles.required}>*</span></label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Your full name" 
                                    className={styles.formInput}
                                    required
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>Email <span className={styles.required}>*</span></label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="your.email@example.com" 
                                    className={styles.formInput}
                                    required
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.formLabel}>Message <span className={styles.required}>*</span></label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    placeholder="Tell me about your project or just say hello!" 
                                    rows={6} 
                                    className={styles.formTextarea}
                                    required
                                />
                            </div>
                            
                            <button type="submit" className={styles.submitButton}>
                                <span>Send Message</span>
                                <span className={styles.buttonIcon}>✈️</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;