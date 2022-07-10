import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Static Components */}
        <Header />

        <Routes>
          {/* Public Routes */}
          <Route element={<LoginPage />} path="/login" />

          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
