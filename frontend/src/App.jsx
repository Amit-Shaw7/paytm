import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Signup = React.lazy(() => import('./pages/Signup'));
const Signin = React.lazy(() => import('./pages/Signin'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
