import WeekCarousel from "../components/WeekCarousel";

const HomePage = () => {
    return(
        <div className="w-5/6 bg-red-500">
            <div>
                <div>pasek progresu</div>
                <div>procent</div>
            </div>
            <div>
                <WeekCarousel />
            </div>
        </div>
    );
}

export default HomePage;