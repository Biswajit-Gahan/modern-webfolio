import styles from "./navbar.module.css";

export default function Navbar() {
    return <section className={styles.container}>
        {/* BRAND NAME SECTION */}
        <a href={"#"} className={styles.brand_name}>SHAIK</a>

        {/* DATE SECTION */}
        <div className={styles.date_container}>
            <div className={styles.date}>Monday, 10:30 AM</div>

            <div className={styles.date_divider} />

            <div className={styles.toggle_container}>
                <div className={styles.toggle_ball} />
            </div>
        </div>

        {/* NAV SECTION */}
        <nav className={styles.nav_container}>
            <a href={"#"} className={styles.list_container}>
                <div className={styles.list_top_container}>
                    <span className={styles.list_top_left}>01</span>
                    <div className={styles.list_top_right} />
                </div>
                <span className={styles.list_bottom}>Work</span>
            </a>

            <a href={"#"} className={styles.list_container}>
                <div className={styles.list_top_container}>
                    <span className={styles.list_top_left}>02</span>
                    <div className={styles.list_top_right} />
                </div>
                <span className={styles.list_bottom}>About</span>
            </a>

            <a href={"#"} className={styles.list_container}>
                <div className={styles.list_top_container}>
                    <span className={styles.list_top_left}>03</span>
                    <div className={styles.list_top_right} />
                </div>
                <span className={styles.list_bottom}>Contact</span>
            </a>
        </nav>
    </section>
}
