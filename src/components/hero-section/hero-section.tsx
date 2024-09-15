import styles from "./hero-section.module.css";
import userImage from "../../assets/image/png/user-image-1.png";

function LocationComponent({title, description}: { title: string, description: string }) {
    return <div className={styles.bottom_location_container}>
        <span className={styles.bottom_location_title}>{title}</span>
        <span className={styles.bottom_location_description}>{description}</span>
    </div>
}

export function ChevronsDown() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <polyline points="7 13 12 18 17 13" />
            <polyline points="7 6 12 11 17 6" />
        </svg>
    );
}


export default function HeroSection() {
    return <section className={styles.container}>
        {/* BOTTOM BOX */}
        <div className={styles.bottom_box}/>

        {/* USER IMAGE */}
        <img className={styles.user_image} src={userImage} alt="user" draggable={false}/>

        {/* OVERLAY */}
        <div className={styles.overlay}/>

        {/* HERO SECTION */}
        <div className={styles.hero_container}>
            <div className={styles.hero_top_container}>
                <span className={styles.hero_top_label}>HI THERE</span>
                <div className={styles.hero_tag_container}>
                    <span className={styles.hero_tag_left}>SHAIK MAHABOOB SUBHANI</span>
                    <span className={styles.hero_tag_right}>IT MANAGER, FINTECH</span>
                </div>
            </div>
            <span className={styles.hero_bottom_label}>I AM <span className={styles.hero_bottom_user_name}>SHAIK</span></span>
        </div>

        {/* BOTTOM SECTION */}
        <div className={styles.bottom_container}>
            <LocationComponent
                title={"PRESENT LOCATION"}
                description={"Bhubaneswar, Odisha"}
            />

            <div className={styles.scroll_container}>
                <span className={styles.scroll_label}>SCROLL</span>
                <div className={styles.chevron_container}>
                    <ChevronsDown />
                </div>
            </div>

            <LocationComponent
                title={"PRESENT COMPANY"}
                description={"Annapurna Finance"}
            />
        </div>
    </section>
}
