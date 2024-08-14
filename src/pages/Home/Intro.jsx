const Intro = () => {
    return (
        <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
            <h1 className="text-white sm:txt-sm">Hi, I am</h1>
            <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
                Hinahoho
            </h1>
            <h1 className="text-6xl sm:text-3xl text-secondary font-semibold">
                I am a full stack developer
            </h1>
            <p className="text-2xl sm:text-sm text-white w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                autem aspernatur, dolorem labore harum nesciunt? Pariatur
                consectetur aliquid culpa, perferendis tempora eum, voluptatibus
                rerum sint officiis ut adipisci molestias illum!
            </p>
            <button className="border-2 border-secondary text-secondary px-10 py-3 rounded">
                Let's Go!
            </button>
        </div>
    );
};
export default Intro;
