export default function TeamPage() {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-4/5 mt-8 object-cover"
                src="/assets/about/team.mp4"
                autoPlay
                loop
                muted
            />
            <div className="absolute top-12 w-full text-center z-10 mt-5">
                <h1 className="text-4xl font-montserrat text-white">Meet The <span className="text-rose-500">Team </span></h1>
            </div>
            <div className="relative z-10 text-white flex flex-col items-center justify-end h-full pb-5">
                <h1 className="text-4xl font-montserrat ">"Build with Unity & Trust"</h1>
            </div>
        </div>
    );
}
