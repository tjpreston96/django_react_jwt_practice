import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// Components
import Header from "./components/Header";
// Context
import { AuthProvider } from "./context/AuthContext";
// Utils
import PrivateWrapper from "./utils/PrivateWrapper";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />

          <Routes>
            {/* Public Routes */}
            <Route element={<LoginPage />} path="/login" />

            {/* PrivateWrapper checks for user otherwise navigates to '/login' */}
            <Route element={<PrivateWrapper />}>
              {/* Private Routes */}
              <Route element={<HomePage />} path="/" />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
