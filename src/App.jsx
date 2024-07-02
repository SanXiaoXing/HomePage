import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import i18n from "./utils/i18n"; // 确保路径正确

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const Content = () => {
  const location = useLocation();

  useEffect(() => {
    // 获取当前路径
    const currentPath = location.pathname;
    // 根据路径设置语言
    const language = currentPath.includes("/zh") ? "zh" : "en";
    i18n.changeLanguage(language);
  }, [location]);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/zh" />} /> {/* 默认重定向到中文 */}
        <Route path="/zh" element={<Content />} />
        <Route path="/en" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;