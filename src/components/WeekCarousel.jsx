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
        <div>
            <div className="overflow-hidden bg-blue-500 w-[500px]">
                <div className="flex w-[500px] h-[300px]">
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