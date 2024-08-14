import SectionTitle from "../../components/SectionTitle";

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
            <SectionTitle title="About Me" />
            <div className="flex w-full items-center sm:flex-col">
                <div className="h-[70vh] w-1/2 sm:w-full">
                    <lottie-player
                        src="https://lottie.host/0a657e86-0b74-41ce-a695-540245795ea4/8o8UlOShLu.json"
                        background="##FFFFFF"
                        speed="1"
                        autoplay
                    ></lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque, consequatur!
                    </p>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident alias ipsam repellendus maxime in distinctio
                        quas aliquid? Quisquam, ex tempora accusamus labore quis
                        tenetur dolorum et beatae repudiandae optio rem!
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
