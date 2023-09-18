
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/pages/Dashboard";
import ForgotPassword from "./components/auth/ForgotPassword";
import Screen from "./components/pages/Screen";
import Settings from "./components/pages/Settings";
import CarDetails from "./components/CarDetails";
import DetailsPage from "./components/pages/DetailsPage";


function App() {
  return (
   
    

    <BrowserRouter>
    <div className="bg-[#0F0F0F] w-full h-screen  text-white font-mono  gap-10">
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/reset" element={<ForgotPassword/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/screen" element={<Screen/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/car-details" element={<DetailsPage />} />
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
