import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Quiz from "./components/Quiz";
import History from "./components/History";

function App() {
  return (
    <div className="App absolute w-full h-full bg-gray-200 flex-col">
      <div className="Wrapper flex justify-center">
        <div className="Header bg-gray-300 mt-5 w-4/5 h-24 rounded-lg flex items-center justify-center">
          <nav className="Links flex gap-x-5 py-2 px-4">
            <Link
              style={{ textDecoration: "none" }}
              className="p-2 rounded-md text-3xl hover:bg-gray-200 bg-gray-400 text-white"
              to="/quiz"
            >
              Quiz
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="p-2 rounded-md text-3xl hover:bg-gray-200 bg-gray-400 text-white"
              to="/history"
            >
              History
            </Link>
          </nav>
        </div>
      </div>

      <div className="Content">
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
