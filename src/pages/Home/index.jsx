import Header from "../../components/Header";
import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Footer from "./Footer";
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
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default Home;
