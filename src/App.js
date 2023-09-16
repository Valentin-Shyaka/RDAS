
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/pages/Dashboard";
import ForgotPassword from "./components/auth/ForgotPassword";


function App() {
  return (
   
    

    <BrowserRouter>
    <div className="bg-[#0F0F0F] w-full h-screen  text-white font-mono  gap-10">
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/reset" element={<ForgotPassword/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;