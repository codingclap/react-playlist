import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "./ApiContext";
import Card from "./components/card";
import Switch from "./components/Switch";


function App() {
  const [themeMode, setThemeMode] = useState('light');
  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode)

  }, [themeMode])

  return (
    <>
      {/* Passing variable inside value that means to giving a access for all props inside ThemeProvider */}
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center mb-5">
              <h3 className='pb-3 text-xl font-medium'>Light/ Dark</h3>
                <Switch />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
