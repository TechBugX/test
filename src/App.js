import "./App.css";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import VideoDisplay from "./components/VideoIn/VideoDisplay";
import Login from "./components/Login/Login";
import { HashRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [token, setToken] = useState(() => {
    return JSON.parse(sessionStorage.getItem("token")) || false;
  });

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);


  // database_passwd="Rapid@040902@08"
  return (
    <Router>
     <div className="App">
    <Header token={token} />
    <Routes>
      {/* <Route path="/" element={token ? <Navigate to="/courses" /> : <Login setToken={setToken} />} /> */}
      {token && <Route path="/courses" element={<Courses />} />}
      {token && <Route path="/vid-display/:link/:id" element={<VideoDisplay />} />}
      {token && <Route path="/course-list/:link" element={<VideoList />} />}

      <Route path="/" element={<Login setToken={setToken} />} />
    </Routes>
    <Footer />
  </div>
    </Router>
  );
}

export default App;
