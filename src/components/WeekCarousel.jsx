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
            <div className="flex">
                <button onClick={() => leftClicked()}>arrow left</button>
                <button onClick={() => rightClicked()}>arrow right</button>
            </div>
        </div>
    );
}

export default WeekCarousel;