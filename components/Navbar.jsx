"use client"

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles['navbar']}>
            <div className={styles['navbar-container']}>
                <Link href="/" className={styles['navbar-logo']}>MyPortfolio</Link>
                <ul className={styles['navbar-menu']}>
                    <li className={styles['navbar-item']}>
                        <Link href="/info" className={styles['navbar-link']}>Info</Link>
                    </li>
                    <li className={styles['navbar-item']}>
                        <Link href="/projects" className={styles['navbar-link']}>Projects</Link>
                    </li>
                    <li className={styles['navbar-item']}>
                        <Link href="/resume" className={styles['navbar-link']}>Resume</Link>
                    </li>
                    <li className={styles['navbar-item']}>
                        <Link href="/contact" className={styles['navbar-link']}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;