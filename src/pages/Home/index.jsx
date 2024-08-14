import Header from "../../components/Header";
import About from "./About";
import Experiences from "./Experiences";
import Intro from "./Intro";
import Projects from "./Projects";

const Home = () => {
    return (
        <>
            <div>
                <Header />
                <div className="bg-primary px-40 sm:px-2">
                    <Intro />
                    <About />
                    <Experiences />
                    <Projects />
                </div>
            </div>
        </>
    );
};
export default Home;
