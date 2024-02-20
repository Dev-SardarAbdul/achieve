import Hero from "./components/hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrustPilot from "./components/hero/trustpilot";

function App() {
  return (
   
     <Router>
     
       <main
        
       >
         <Routes>
           <Route path="/" element={<Hero />} />
           <Route path="/trust-pilot" element={<TrustPilot />} />
        
         </Routes>
       </main>
   
   </Router>
  );
}

export default App;


 