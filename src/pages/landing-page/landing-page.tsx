import styles from "./landing-page.module.css";
import {Fragment} from "react";
import Navbar from "../../components/navbar/navbar";
import HeroSection from "../../components/hero-section/hero-section";

export default function LandingPage() {
    return <Fragment>
        <Navbar />
        <HeroSection />
        <div style={{height: "500vh"}}></div>
    </Fragment>
}
