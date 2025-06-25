import Logo from "../assets/logo.svg";

function Footer() {
    return (
        <footer className="px-5 pt-10 pb-5 bg-primary md:px-10 xl:px-20">
            <div className="flex flex-col gap-10 max-w-[90rem] mx-auto">
                <div className="flex flex-col gap-15 text-white lg:flex-row lg:justify-between">
                    <div className="md:w-[27rem]">
                        <img src={Logo} alt="logo" />
                        <p className="font-lato mt-5">
                            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your
                            business results.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-5">
                        <div className="lg:w-[15.938rem]">
                            <div className="font-[600] text-xl mb-3">Our Technologies</div>
                            <ul className="text-sm font-medium flex flex-col gap-3">
                                <li>ReactJS</li>
                                <li>Gatsby</li>
                                <li>NextJS</li>
                                <li>NodeJS</li>
                            </ul>
                        </div>
                        <div className="lg:w-[15.938rem]">
                            <div className="font-[600] text-xl mb-3">Our Services</div>
                            <ul className="text-sm font-medium flex flex-col gap-3">
                                <li>Social media Marketing</li>
                                <li>Web & Mobile App Development</li>
                                <li>Data & Analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="border-t border-t-white pt-2 font-medium text-sm flex flex-row items-center justify-center text-white w-full max-w-[39.375rem] mx-auto"
                >
                    <div className="border-r border-r-white pr-4"><a href="">Privacy Policy</a></div>
                    <div className="pl-4"><a href="">Terms & Conditions</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;