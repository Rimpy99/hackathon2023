import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import {useSelector} from "react-redux";

const App = () => {
    const user = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage/>}/>
      </Routes>
        {/*{user.id && <Navbar/>}*/}
        <Navbar/>
    </BrowserRouter>
  );
}

export default App;