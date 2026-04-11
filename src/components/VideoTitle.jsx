
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-30 px-12 absolute text-white bottom-20">
            <h1 className="text-6xl font-semibold">{title}</h1>
            <p className="py-6 text-lg w-2/3">{overview}</p>
            <div className="">
                <button className="text-black bg-white rounded p-2 px-8 font-semibold cursor-pointer mr-2">Play</button>
                <button className="text-white bg-[#6d6d6e66] p-2 px-4 rounded font-semibold cursor-pointer">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;