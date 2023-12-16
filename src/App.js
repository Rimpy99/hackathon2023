import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import {useSelector} from "react-redux";

const App = () => {
    const user = useSelector(state => state.user);

  return (
    <BrowserRouter>
        <div className="flex">
            <div className="basis-10/12">
                <Routes>
                    <Route path="/" element={<AuthPage/>}/>
                </Routes>
            </div>
            <div className="basis-2/12">
                {/*{user.id && <Navbar/>}*/}
                <Navbar/>
            </div>
      </div>
    </BrowserRouter>


  );
}

export default App;