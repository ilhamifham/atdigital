import { useState } from "react";

import Plus from "/src/assets/plus.svg";
import Minus from "/src/assets/minus.svg";

function Collapsible({ title, description, isCollapsed }) {
    const [toggleCollapse, setToggleCollapse] = useState(isCollapsed || false);

    function handleToggleCollapse() {
        setToggleCollapse((prevToggleCollapse) => !prevToggleCollapse);
    }

    return (
        <button className="p-6 bg-third rounded-md text-left cursor-pointer mb-4 w-full last:mb-0" onClick={handleToggleCollapse}>
            <div className="text-xl font-medium flex flex-row gap-10 items-start justify-between">
                <span className={`md:text-[1.375rem] ${toggleCollapse ? "text-primary" : ""}`}>{title}</span>
                <span className="mt-1.5 flex-none w-4 h-4 flex item-center justify-center">
                    <img src={toggleCollapse ? Minus : Plus} alt="" />
                </span>
            </div>
            <div className={`grid duration-300 ${toggleCollapse ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                    <p className="text-fourth leading-[1.875] mt-3 md:text-lg">{description}</p>
                </div>
            </div>
        </button>
    );
}

export default Collapsible;
