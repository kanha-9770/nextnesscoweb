export default function TeamPage() {
    return (
        <div className="relative h-screen w-screen overflow-hidden ">
            <video
                className="absolute top-0 left-0 w-full object-cover"
                src="/assets/about/team.mp4"
                autoPlay
                loop
                muted
            />
            <div className="relative z-10 text-white flex flex-col items-center justify-center h-full">
               
            </div>
        </div>
    );
}
