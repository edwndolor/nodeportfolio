import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { exps } from "../../resources/exp";

const Experiences = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    return (
        <div className="mt-2">
            <SectionTitle title="Software Development Experience" />;
            <div className="flex py-10 gap-10 sm:flex-col">
                <div className="flex flex-col gap-5 border-l-2 border-secondary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {exps.map((e, i) => (
                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                setSelectedItem(i);
                            }}
                        >
                            <h1
                                className={`text-xl px-5 
                                    ${
                                        selectedItem === i
                                            ? "text-secondary border-tertitary border-l-4 -ml-[3px] py-3"
                                            : "text-white border-tertitary py-3"
                                    }`}
                            >
                                {e.period}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-secondary text-3xl">
                        {exps[selectedItem].title}
                    </h1>
                    <h1 className="text-white">{exps[selectedItem].company}</h1>
                    <p className="text-white">{exps[selectedItem].desc}</p>
                </div>
            </div>
            ;
        </div>
    );
};
export default Experiences;
