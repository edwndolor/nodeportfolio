import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
    const user = {
        email: "edwndolor@gmail.com",
        mobile: "+639457141432",
        linkedin: "linkedin.com/in/edwindolor/",
    };
    return (
        <div>
            <div>
                <SectionTitle title="Connect" />
            </div>
            <div className="flex sm:flex-col justify-between">
                <div className="flex flex-col">
                    <p className="text-white">{"{"}</p>
                    {Object.keys(user).map((key) => (
                        <h1 className="m-5 text-sm">
                            <span className="text-secondary">{key} : </span>
                            <span className="text-white">{user[key]}</span>
                        </h1>
                    ))}
                    <p className="text-white">{"}"}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
