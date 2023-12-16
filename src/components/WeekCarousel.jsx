import { useState } from "react";
import Week from "./Week";

const WeekCarousel = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0);

    const leftClicked = () => {
        currentSlide !== 0 && setCurrentSlide(currentSlide => currentSlide - 1);
    }

    const rightClicked = () => {
        currentSlide !== 1 && setCurrentSlide(currentSlide => currentSlide + 1);
    }

    return(
        <div className="px-12 pb-6">
            <div className="overflow-hidden bg-gray-800 h-max rounded-2xl">
                <div className="flex h-fit">
                    <Week slideNumber={currentSlide}/>
                </div>
            </div>
            <div className="flex justify-center my-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-2xl"
                    onClick={() => leftClicked()}
                >
                    Previous week
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-2xl"
                    onClick={() => rightClicked()}
                >
                    Next week
                </button>
            </div>
        </div>
    );
}

export default WeekCarousel;