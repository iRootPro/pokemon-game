import React from 'react';
import cn from 'classnames'
import styles from './Layout.module.css'

const Layout = ({id = 0, title, urlBg, colorBg, children}) => {
    const background = urlBg ? {backgroundImage: `url(${urlBg})`} : colorBg ? {background: colorBg} : null
    return (
        <section className={styles.root} id={id}>
            <div className={styles.wrapper} style={background}>
                <article>
                    <div className={styles.title}>
                        {title && <h3>{title}</h3>}
                        <span className={styles.separator}></span>
                    </div>
                    <div className={cn(styles.desc, styles.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;
