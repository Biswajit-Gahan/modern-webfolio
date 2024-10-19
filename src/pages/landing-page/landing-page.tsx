import styles from "./landing-page.module.css";
import Navbar from "../../components/navbar/navbar";
import HeroSection from "../../components/hero-section/hero-section";
import LoadingScreen from "../../components/loading-screen/loading-screen";
import AboutSection from "../../components/about-section/about-section";
import ExperienceSection from "../../components/experience-section/experience-section";
import ContactSection from "../../components/contact-section/contact-section";
import FooterSection from "../../components/footer-section/footer-section";

export default function LandingPage() {

    return <div className={`${styles.container} dark-mode`}>
        {/*<LoadingScreen />*/}
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
    </div>
}
