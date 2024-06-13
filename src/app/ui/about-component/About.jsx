import HeroSection from "../home-component/hero-component/HeroSection";

const About = () => {
    const heading = "Sarojini E-market"

    return (
        <div className="about-main-div">
            <HeroSection heading={heading} />
        </div>
    )
}

export default About;