import { createContext } from "react";
import { Card } from "../components/CardComponent";

const ThemeContext = createContext();

export default function ThemeContext() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const switchDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  <ThemeContext.Provider value={isDarkMode}>
    <div>
      <Card image="" title="Context">
        Hoy vamos a aprender Context
        <span role="img" aria-label="Icono">
          🌈
        </span>
        <span role="img" aria-label="Icono">
          🤑
        </span>
      </Card>
    </div>
    <button onClick={switchDarkMode}>Cambiar tema</button>
  </ThemeContext.Provider>;
}
