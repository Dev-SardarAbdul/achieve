
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrustPilot from "./components/hero/trustpilot";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<TrustPilot />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
