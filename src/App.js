import React from "react";
import {AnimatePresence} from "framer-motion";
import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PCservice from "./components/PCservice";
import CustomPc from "./components/CustomPc";
import Contact from "./components/Contact";
import Login from "./components/Login";
import About from "./components/About";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
       <Header />
       <main className="w-full px-8 py-4 md:px-16 mt-16 md:mt-16">
          <Routes>
            <Route path="/*" element={<MainContainer/>}/>
            <Route path="/Pcservice" element={<PCservice />}/>
            <Route path="/customPc" element={<CustomPc />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

       <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
