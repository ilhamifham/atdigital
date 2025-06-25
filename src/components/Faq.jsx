import Collapsible from "./ui/Collapsible.jsx";

function Faq() {
    return (
        <section className="px-5 pb-5 md:px-10 md:pb-10 lg:pb-20">
            <h2 className="font-poppins text-primary font-[600] text-[1.6875rem] mb-7 text-center">
                Frequently asked questions
            </h2>
            <div className="max-w-[56rem] mx-auto">
                <Collapsible
                    title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                    description="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
                        Sapien massa morbi risus sagittis tortor integer."
                    isCollapsed={true}
                />
                <Collapsible
                    title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                    description="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
                        Sapien massa morbi risus sagittis tortor integer."
                />
                <Collapsible
                    title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                    description="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
                        Sapien massa morbi risus sagittis tortor integer."
                />
            </div>
        </section>
    );
}

export default Faq;
