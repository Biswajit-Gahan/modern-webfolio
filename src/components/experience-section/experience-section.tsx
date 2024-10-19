import styles from "./experience-section.module.css";
import arrowIcon from "../../assets/image/svg/arrow-icon.svg";
import annapurnaBwIcon from "../../assets/image/png/annapurna-logo-bw-icon.png";
import globeIcon from "../../assets/image/svg/globe.svg";
import clockIcon from "../../assets/image/svg/clock.svg";

type AccordionHeaderProps = {
    active?: boolean;
    companyName: string;
}

type AccordionContentProps = {
    active?: boolean;
    companyName: string;
    webLink: string;
    position: string;
    durationFrom: string;
    durationTo: string;
    companyLogo: string
    description: string;
    heading: string;
}

function AccordionHeader({active = false, companyName}: AccordionHeaderProps) {
    return <div className={`${styles.accordion_header_container} ${active && styles.accordion_header_active}`}>
        <img className={styles.accordion_header_image} src={arrowIcon} alt="navigate" draggable={false}/>
        <span className={styles.accordion_header_label}>{companyName}</span>
    </div>
}

function AccordionContent(props: AccordionContentProps) {
    return <div className={`${props.active ? styles.accordion_content_container_active : styles.accordion_content_container}`}>
        <div className={styles.accordion_content_heading_container}>
            <span className={styles.accordion_content_heading} dangerouslySetInnerHTML={{__html: props.heading}}></span>
            <div className={styles.company_web_link_container}>
                <img className={styles.globe_icon} src={globeIcon} alt="website"/>&nbsp;
                <a className={styles.company_web_link} href={`https://${props.webLink}`}
                   target={"_blank"}>{props.webLink}</a>
            </div>

            <div className={styles.info_container}>
                <span className={styles.position_tag}>Position</span>
                <span className={styles.position_label}>{props.position}</span>
                <div className={styles.duration_container}>
                    <img className={styles.duration_icon} src={clockIcon} alt="duration"/>&nbsp;&nbsp;{props.durationFrom} - {props.durationTo}
                </div>
                <div className={styles.hr} />
                <p className={styles.info_description}>{props.description}</p>
            </div>
        </div>

        <img className={styles.company_logo} src={props.companyLogo} alt={props.companyName.toLowerCase()} draggable={false}/>
    </div>
}

export default function ExperienceSection() {
    return <section className={styles.container}>
        <h1 className={styles.heading}>MY EXPERIENCES</h1>
        <div className={styles.accordion_container}>
            <AccordionHeader active={true} companyName={"Annapurna Finance"} />

            <AccordionContent
                active={true}
                companyName={"Annapurna Finance"}
                webLink={"www.annapurnafinance.com"}
                heading={"Annapurna Finance<br/>Private Limited"}
                companyLogo={annapurnaBwIcon}
                durationFrom={"December, 2020"}
                durationTo={"Present"}
                description={"Managing in-house development into digital era."}
                position={"Technology Innovation IT-Head"}
            />
            <AccordionHeader active={false} companyName={"Jayam Solutions"} />

            <AccordionContent
                active={false}
                companyName={"Annapurna Finance"}
                webLink={"www.annapurnafinance.com"}
                heading={"Annapurna Finance<br/>Private Limited"}
                companyLogo={annapurnaBwIcon}
                durationFrom={"December, 2020"}
                durationTo={"Present"}
                description={"Managing in-house development into digital era."}
                position={"Technology Innovation IT-Head"}
            />

            <AccordionHeader active={false} companyName={"GFK Softwares"} />

            <AccordionContent
                active={false}
                companyName={"Annapurna Finance"}
                webLink={"www.annapurnafinance.com"}
                heading={"Annapurna Finance<br/>Private Limited"}
                companyLogo={annapurnaBwIcon}
                durationFrom={"December, 2020"}
                durationTo={"Present"}
                description={"Managing in-house development into digital era."}
                position={"Technology Innovation IT-Head"}
            />

            <AccordionHeader active={false} companyName={"Kantar TNS"} />

            <AccordionContent
                active={false}
                companyName={"Annapurna Finance"}
                webLink={"www.annapurnafinance.com"}
                heading={"Annapurna Finance<br/>Private Limited"}
                companyLogo={annapurnaBwIcon}
                durationFrom={"December, 2020"}
                durationTo={"Present"}
                description={"Managing in-house development into digital era."}
                position={"Technology Innovation IT-Head"}
            />

        </div>
    </section>
}