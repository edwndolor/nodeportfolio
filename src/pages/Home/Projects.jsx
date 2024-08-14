import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/project";

const Projects = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    return (
        <div>
            <SectionTitle title="Projects" />;
            <div className="flex py-10 gap-10 sm:flex-col">
                <div className="flex flex-col gap-5 border-l-2 border-secondary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {projects.map((pro, i) => (
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
                                {pro.title}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-white">
                        {projects[selectedItem].desc}
                    </h1>
                    <h1 className="text-secondary">
                        Technology Used: {projects[selectedItem].tech}
                    </h1>
                </div>
            </div>
            ;
        </div>
    );
};
export default Projects;
