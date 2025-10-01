//Importo hooks de react que vamos a utilizar
import { createContext, useEffect, useContext, useState } from "react"

//Defino y creo el contexto
const ThemeContext = createContext()


//Armo el proveedor del theme
const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('light') //--> Este es el estado que almacena que theme asignamos

  //funcion que alterna el state theme entre light y dark
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { useTheme, ThemeProvider }