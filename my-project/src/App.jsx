import Square from "./components/Square";
import Input from "./components/Input";
import { useState } from "react";

function App() {

  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDark, setIsDark] =useState(true);

  return (
    <>
      <Input  
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        isDark={isDark}
      />
    </>
  )
}

export default App
