import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import {useSelector} from "react-redux";

const App = () => {
    const user = useSelector(state => state.user);

  return (
    <BrowserRouter>
        <div className={user.id && "flex"}>
            <div className={user.id && "basis-10/12"}>
                <Routes>
                    <Route path="/" element={<AuthPage/>}/>
                </Routes>
            </div>
            <div className={user.id && "basis-2/12"}>
                {user.id && <Navbar/>}
            </div>
      </div>
    </BrowserRouter>


  );
}

export default App;