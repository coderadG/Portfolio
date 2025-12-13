'use client';
import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeMenu();
    };

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.spacer}></div>
                
                <ul className={styles.navList}>
                    <li>
                        <button onClick={() => scrollToSection('home')}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('about')}>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('experience')}>
                            Involvement
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('skills')}>
                            Skills
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('projects')}>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('blogs')}>
                            Education
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')}>
                            Contact
                        </button>
                    </li>
                </ul>

                <button 
                    className={styles.mobileMenuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileNavList}>
                        <li>
                            <button onClick={() => scrollToSection('home')}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')}>
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('experience')}>
                                Involvement
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('skills')}>
                                Skills
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')}>
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('blogs')}>
                                Education
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')}>
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;