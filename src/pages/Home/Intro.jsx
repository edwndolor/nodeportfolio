const Intro = () => {
    return (
        <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
            <h1 className="text-white sm:txt-sm">Hello! I am</h1>
            <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
                EDWIN DOLOR
            </h1>
            <h1 className="text-6xl sm:text-3xl text-secondary font-semibold">
                I am a software developer
            </h1>
            <p className="text-2xl sm:text-sm text-white w-3/4">
                Hello, I'm Edwin Dolor, a software developer based in The
                Philippines. With 6 years of experience in web devlopment. In my
                free time, I enjoy having a walk, riding my bicycle or playing
                DOTA with my friends. I believe in the importance of lifelong
                learning and am dedicated to continually updating my web
                development skills and knowledge to remain competitive and
                deliver exceptional results.. Feel free to reach out to me!
            </p>
            <button className="border-2 border-secondary text-secondary px-10 py-3 rounded">
                More...
            </button>
        </div>
    );
};
export default Intro;
