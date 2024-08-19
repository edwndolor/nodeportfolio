const Intro = () => {
    return (
        <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
            <h1 className="text-white sm:txt-sm text-3xl">Hey Jude! This is</h1>
            <h1 className="text-8xl sm:text-3xl text-secondary font-semibold">
                EDWIN DOLOR
            </h1>
            <h1 className="text-6xl sm:text-3xl text-white font-semibold">
                I am a software developer
            </h1>

            {/* <button className="border-2 border-secondary text-secondary px-10 py-3 rounded">
                More...
            </button> */}
        </div>
    );
};
export default Intro;
