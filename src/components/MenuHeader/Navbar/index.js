import React from 'react';
import styles from './style.module.css'
import cn from 'classnames'

const NavBar = ({isOpen, onChangeOpen}) => {
    const handleClick = () => {
        onChangeOpen && onChangeOpen()
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navWrapper}>
                <p className={styles.brand}>
                    LOGO
                </p>
                <a className={cn(styles.menuButton, {[styles.active]: isOpen})} onClick={handleClick}>
                    <span/>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
