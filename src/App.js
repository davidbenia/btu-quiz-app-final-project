import { Routes, Route, Link, Navigate } from "react-router-dom";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <nav className="Links">
          <Link className="" to="/quiz">
            Quiz
          </Link>
        </nav>
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
