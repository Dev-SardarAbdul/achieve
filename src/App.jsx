
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelpFunction from "./components/hero/helpFunction";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HelpFunction />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
