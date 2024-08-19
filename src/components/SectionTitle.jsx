const SectionTitle = ({ title }) => {
    return (
        <>
            <div className="flex justify-between items-center py-10 sm:py-2">
                <h1 className="text-white text-6xl sm:text-lg">{title}</h1>
                <div className="w-60 h-[1px] bg-secondary"></div>
            </div>
        </>
    );
};
export default SectionTitle;
