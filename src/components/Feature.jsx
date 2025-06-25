import WebImage from "../assets/web.png";
import SeoImage from "../assets/digital.png";
import Button from "./ui/Button.jsx";

function Feature() {
    return (
        <section className="px-5 py-15 md:px-10">
            <div className="mb-15 flex flex-col gap-5 md:flex-row md:items-center lg:w-[56rem] lg:mx-auto xl:w-[66.5rem]">
                <img src={WebImage} alt="" className="w-[17.188rem] mx-auto lg:w-[21.625rem] xl:w-[25.875rem]" />
                <div className="text-center md:text-left">
                    <h2 className="font-poppins text-primary font-[600] text-[1.6875rem] mb-4">Web & Mobile App Development</h2>
                    <p className="mb-6">
                        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods
                        to respond to different intents shown by your potential customers who interact with your business online.
                    </p>
                    <Button text="Learn More" />
                </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:items-center lg:w-[56rem] lg:mx-auto xl:w-[66.5rem]">
                <img src={SeoImage} alt="" className="w-[17.188rem] mx-auto md:order-2 lg:w-[21.625rem] xl:w-[25.875rem]" />
                <div className="text-center md:text-left">
                    <h2 className="font-poppins text-primary font-[600] text-[1.6875rem] mb-4">Digital Strategy Consulting</h2>
                    <p className="mb-6">
                        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never
                        work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient
                        model for your business.
                    </p>
                    <Button text="Learn More" />
                </div>
            </div>
        </section>
    )
}

export default Feature;