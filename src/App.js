import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/CalendarPage";
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
                    <Route path="/home" element={user.id ? <HomePage/> : <AuthPage />}/>
                    <Route path="/calendar" element={user.id ? <CalendarPage/> : <AuthPage />}/>
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