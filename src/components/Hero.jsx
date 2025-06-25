import HeroImage from "../assets/hero.png";
import Button from "./ui/Button.jsx";

function Hero() {
    return (
        <section className="lg:px-10 xl:px-20 lg:min-h-[43.75rem] lg:bg-[url(/src/assets/hero.png)] lg:bg-cover lg:bg-center lg:bg-no-repeat">
            <img src={HeroImage} alt="hero" className="w-full h-full lg:hidden" />
            <div className="max-w-[90rem] mx-auto lg:h-[43.75rem] relative">
                <div className="px-5 pt-6 pb-8 bg-[linear-gradient(256.73deg,_#1CBDDD_27.86%,_#4DCA79_100%)] md:px-10 lg:w-[40.875rem] lg:absolute lg:bottom-10">
                    <h1 className="font-bold text-4xl text-white mb-5 md:text-5xl">We Crush Your Competitors, Goals, and Sales Records - Without the B.S.</h1>
                    <Button text="Get free consultation" />
                </div>
            </div>
        </section>
    )
}

export default Hero;