import React from 'react';
import styles from './style.module.css'
import cn from 'classnames'

const Menu = ({isOpen}) => {
    const links = [
        {name: 'HOME', href: "#welcome"},
        {name: 'GAME', href: "#game"},
        {name: 'ABOUT', href: "#about"},
        {name: 'CONTACT', href: "#contact"}
    ]
    return (
        <div className={cn(styles.menuContainer,
            {
                [styles.active]: isOpen === true,
                [styles.deactive]: isOpen === false
            })}>
            <div className={styles.overlay}/>
            <div className={styles.menuItems}>
                <ul>
                    {links.map((link, index) => <li key={index}><a href={link.href}>{link.name}</a></li>)}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
