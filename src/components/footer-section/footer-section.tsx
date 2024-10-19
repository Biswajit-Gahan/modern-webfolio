import styles from "./footer-section.module.css";

export default function FooterSection() {
    return <section className={styles.container}>
        <div className={styles.thank_you_wrapper}>
            <p className={styles.thank_you_label}>THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU</p>
        </div>

        <div className={styles.footer_container}>
            <span className={styles.footer_left_label}>SHAIK'S CLOUD | 2024</span>
            <span className={styles.footer_right_label}>DESIGNED & DEVELOPED BY BISWAJIT GAHAN</span>
        </div>
    </section>
}