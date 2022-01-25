import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Quiz from "./components/Quiz";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <div className="Header">
        <nav className="Links">
          <Link className="" to="/quiz">
            Quiz
          </Link>
        </nav>
=======
    <div className="App absolute w-full h-full bg-gray-200 flex justify-center">
      <div className="Header bg-gray-300 mt-5 w-4/5 h-24 rounded-lg flex items-center justify-center">
        <nav className="Links flex gap-x-5 py-2 px-4 text-white"></nav>
>>>>>>> develop
      </div>

      <div className="Content">
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
