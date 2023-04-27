import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar_left from "./components/Sidebar_left";
import Sidebar_mobile_left from "./components/Sidebar_mobile_left";
import Sidebar_right from "./components/Sidebar_right";
import Home_mid from "./components/Home_mid";
import Home_mid_new from "./components/Home_mid_new";
import Specific_news_feed from "./components/Specific_news_feed";
import Specific_news_feed_mid from "./components/Specific_news_feed_mid";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  exact element={<Home />} />
        <Route path="/Sidebar_left" element={<Sidebar_left />} />
        <Route path="/Sidebar_mobile_left" element={<Sidebar_mobile_left />} />
        <Route path="/Sidebar_right" element={<Sidebar_right />} />
        <Route path="/Home_mid" element={<Home_mid />} />
        <Route path="/Home_mid_new" element={<Home_mid_new />} />
        <Route path="/Specific_news_feed" element={<Specific_news_feed />} />
        <Route path="/Specific_news_feed_mid" element={<Specific_news_feed_mid />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
