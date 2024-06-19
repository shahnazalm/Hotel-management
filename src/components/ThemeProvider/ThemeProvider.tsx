'use client'

import React, { useEffect, useState } from "react"

import ThemeContex from "@/context/ThemeContext"
import ThemeContext from "@/context/ThemeContext";

const Themeprovider = ({children}:{children: React.ReactNode}) =>{
    const themeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState(false);
  useEffect(() => {
    setRenderComponent(true);
  }, []);
  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

 export default Themeprovider;