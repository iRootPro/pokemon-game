import React from 'react';
import styles from './style.module.css'
import cn from 'classnames'

const NavBar = ({isOpen, onChangeOpen, bgActive = false}) => {
    const handleClick = () => {
        onChangeOpen && onChangeOpen()
    }

    return (
        <nav className={cn(styles.navbar, {[styles.bgActive]: bgActive})}>
            <div className={styles.navWrapper}>
                <p className={styles.brand}>
                    LOGO
                </p>
                <div className={cn(styles.menuButton, {[styles.active]: isOpen})} onClick={handleClick}>
                    <span/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
