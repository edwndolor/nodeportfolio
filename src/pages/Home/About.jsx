import SectionTitle from "../../components/SectionTitle";
import avatar from "../../assets/dev.profile.jpeg";
import Resume from "../../components/Resume";
const About = () => {
    const skills = [
        "Javascript",
        "ReactJS",
        "NodeJs",
        "ExpressJs",
        "PHP",
        "MySQL",
    ];
    return (
        <div>
            <SectionTitle title="A brief background" />
            <div className="flex w-full items-center sm:flex-row sm:overflow-x-scroll sm:w-full">
                <div className="h-[70vh] w-1/2 sm:w-full">
                    <img
                        src={avatar}
                        className="rounded-full logo object-contain"
                        alt="Avatar"
                    />
                    {/* <lottie-player
                        src="https://lottie.host/0a657e86-0b74-41ce-a695-540245795ea4/8o8UlOShLu.json"
                        background="##FFFFFF"
                        speed="1"
                        autoplay
                    ></lottie-player> */}
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p className="text-white">
                        Hello, I'm Edwin Dolor, a software developer based in
                        the Philippines. With 6 years of experience, I
                        specialize in building robust and scalable web
                        applications. My expertise spans various projects,
                        including ERP systems, e-commerce platforms,
                        microfinance solutions, and e-wallet applications."
                    </p>
                    <p className="text-white">
                        My competitive edge as a software developer is my
                        relentless focus on delivering measurable results. I go
                        beyond just writing code—my commitment is to drive value
                        and achieve the objectives of every project I take on.
                        This results-oriented approach distinguishes me from
                        others in the field.
                    </p>
                    <p className="text-white mt-3">
                        <Resume />
                    </p>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-white text-xl">Technologies working on</h1>
                <div className="flex flex-wrap gap-3 mt-5">
                    {skills.map((skill) => (
                        <div className="border border-secondary py-3 px-10">
                            <h1 className="text-secondary">{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default About;
