import styles from "./navbar.module.css";
import FlippyText from "../animations/flippy-text/flippy-text";
import {motion} from "framer-motion";

export default function Navbar() {
    return <section className={styles.container}>
        {/* BRAND NAME SECTION */}
        <motion.a initial={"initial"} whileHover={"animate"} href={"#"} className={styles.brand_name}>
            <FlippyText
                text={"SHAIK"}
                direction={"up"}
                postText={"."}
                postInlineStyles={{
                    color: "var(--primary-color)",
                }}
            />
        </motion.a>

        {/* DATE SECTION */}
        <div className={styles.date_container}>
            <div className={styles.date}>Monday, 10:30 AM</div>

            <div className={styles.date_divider}/>

            <div className={styles.toggle_container}>
                <div className={styles.toggle_ball}/>
            </div>
        </div>

        {/* NAV SECTION */}
        <nav className={styles.nav_container}>
            <motion.a initial={"initial"} whileHover={"animate"} href={"#"} className={styles.list_container}>
                <div className={styles.list_top_container}>
                    <span className={styles.list_top_left}>01</span>
                    <div className={styles.list_top_right}/>
                </div>
                {/*<span className={styles.list_bottom}>Work</span>*/}
                <FlippyText text={"Work"} direction={"up"} />
            </motion.a>

            <motion.a initial={"initial"} whileHover={"animate"} href={"#"} className={styles.list_container}>
                <div className={styles.list_top_container}>
                    <span className={styles.list_top_left}>02</span>
                    <div className={styles.list_top_right}/>
                </div>
                {/*<span className={styles.list_bottom}>About</span>*/}
                <FlippyText text={"About"} direction={"up"} />
            </motion.a>

            <motion.a initial={"initial"} whileHover={"animate"} href={"#"} className={styles.list_container}>
                <div className={styles.list_top_container}>
                    <span className={styles.list_top_left}>03</span>
                    <div className={styles.list_top_right}/>
                </div>
                {/*<span className={styles.list_bottom}>Contact</span>*/}
                <FlippyText text={"Contact"} direction={"up"} />
            </motion.a>
        </nav>
    </section>
}
