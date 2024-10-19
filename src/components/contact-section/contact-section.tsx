import styles from "./contact-section.module.css";
import handShakeIcon from "../../assets/image/svg/hand-shake.svg";
import userImage3 from "../../assets/image/png/user-image-3.png";
import arrowUpIcon from "../../assets/image/svg/arrow-up.svg";

export default function ContactSection() {
    return <section className={styles.container}>
        <img className={styles.user_image} src={userImage3} alt="shaik mahaboob subhani" draggable={false}/>

        <div className={styles.heading_container}>
            <img className={styles.hand_shake_icon} src={handShakeIcon} alt="project discuss" draggable={false}/>
            <p className={styles.heading_label}>Let's Discuss About Your Next Dream Project</p>
        </div>

        <div className={styles.contact_container}>
            <p className={styles.contact_label}>Tell Me About Your Vision</p>
            <span className={styles.contact_tag}>Connect me using these given links below.</span>
            <div className={styles.link_container}>
                <a className={styles.whatsapp_link} href="#">Whatsapp Me <img className={styles.arrow_up_icon} src={arrowUpIcon} alt="whatsapp" draggable={false}/></a>
                <a className={styles.email_link} href={"mailto:abc@gmail.com"}>Email Me <img className={styles.arrow_up_icon} src={arrowUpIcon} alt="email" draggable={false}/></a>
            </div>
        </div>
    </section>
}