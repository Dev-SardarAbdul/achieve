
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DebtTools from "./pages/debtTools";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<DebtTools />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
