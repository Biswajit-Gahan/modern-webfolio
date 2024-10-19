import styles from "./loading-screen.module.css";

export default function LoadingScreen() {
    return <section className={styles.container}>
        <span>LOADING</span>
        <span>58%</span>
    </section>
}