import WeekCarousel from "../components/WeekCarousel";
import ProgressBar from "../components/ProgressBar";
const HomePage = () => {
    return(
        <>
            <div className="flex flex-col ">
                <ProgressBar/>
            </div>
            <div>
                <WeekCarousel />
            </div>
        </>
    );
}

export default HomePage;