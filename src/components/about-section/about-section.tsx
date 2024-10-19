import styles from "./about-section.module.css";
import hiEmoji from "../../assets/svg/hi_emoji.svg";
import socialFacebookIcon from "../../assets/svg/social_facebook_icon.svg";
import socialTwitterIcon from "../../assets/svg/social_twitter_icon.svg";
import socialLinkedInIcon from "../../assets/svg/social_linked_in_icon.svg";
import socialInstagramIcon from "../../assets/svg/social_instagram_icon.svg";
import userImageTwo from "../../assets/image/png/user-image-2.png";

export default function AboutSection() {
    return <section className={styles.container}>
        {/*ABOUT SECTION WRAPPER*/}
        <div className={styles.wrapper}>
            <div className={styles.title_container}>
                <div className={styles.title_wrapper}>
                    Bring Your Ideas To The Life Through Me
                    <button className={styles.title_button}>
                        <img className={styles.hi_emoji} src={hiEmoji} alt="hello" draggable={false}/>
                        Say Hello To Me
                    </button>
                </div>
            </div>

            <div className={styles.social_wrapper}>
                <p className={styles.social_text}>Find me on<br/>social platforms</p>
                <div className={styles.social_icons_wrapper}>
                    <a href="#"><img src={socialFacebookIcon} alt="facebook"/></a>
                    <a href="#"><img src={socialTwitterIcon} alt="twitter"/></a>
                    <a href="#"><img src={socialLinkedInIcon} alt="linkedin"/></a>
                    <a href="#"><img src={socialInstagramIcon} alt="instagram"/></a>
                </div>
            </div>

            <div className={styles.cards_wrapper}>
                <div className={styles.card}>
                    <span>19+</span>
                    <span>Years of Experience</span>
                </div>
                <div className={styles.card}>
                    <span>250+</span>
                    <span>Projects Completed</span>
                </div>
                <div className={styles.card}>
                    <span>58+</span>
                    <span>Happy Clients</span>
                </div>
                <div className={styles.card}>
                    <span>02</span>
                    <span>Leading System Designs</span>
                </div>
            </div>

            <div className={styles.image_wrapper}>
                <img src={userImageTwo} alt="shaik mahaboob subhani" draggable={false}/>
            </div>

            <div className={styles.about_wrapper}>
                <div className={styles.about_heading_wrapper}>
                    <span>About Me</span><div className={styles.hr}/>
                </div>

                <div className={styles.about_content_wrapper}>
                    <p>
                        Hello, I am Shaik Mahaboob Subhani. Recognized as a Fintech evangelist in setting the company vision, technology, digital practices and strategies till launch of Fintech portfolio developing new systems. Dexterity to identify gaps, bottlenecks, risks and requirements in robust Fintech technologies and architecture. Insightful experience in prioritizing, winning, launching and developing high-reach & impact Fintech/Technology portfolios. Capability in developing a pipeline of episodic deals, particularly within BFSI industry.
                    </p>
                </div>
            </div>

            <div className={styles.details_wrapper}>
                <div className={styles.details_top_wrapper}>
                    <p>SHAIK<br/>MAHABOOB<br/>SHUBHANI</p>
                    <p>Smart<br/>Technologies That<br/>Behind The Man</p>
                </div>

                <div className={styles.details_bottom_wrapper}>
                    <a href={"#"}>Know More</a>
                </div>
            </div>

        </div>
    </section>
}