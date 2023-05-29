import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-center text-primary">Mon blog photo</h1>
      </div>
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
