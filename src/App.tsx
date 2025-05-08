import classNames from "classnames";
import { StrictMode, useCallback, useState } from "react";
import { Classes } from "@blueprintjs/core";
import { Navigation } from "./Navigation";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const handleDarkThemeToggle = useCallback(
    () => setDarkTheme(!darkTheme),
    [darkTheme],
  );
  const [strictMode, setStrictMode] = useState(false);
  const handleStrictModeToggle = useCallback(
    () => setStrictMode((s) => !s),
    [],
  );

  const examples = <div className="examples-container"></div>;

  return (
    <div
      className={classNames("app", {
        [Classes.DARK]: darkTheme,
      })}
    >
      <Navigation
        darkTheme={darkTheme}
        onToggleDarkTheme={handleDarkThemeToggle}
        strictMode={strictMode}
        onToggleStrictMode={handleStrictModeToggle}
      />
      {strictMode ? <StrictMode>{examples}</StrictMode> : examples}
    </div>
  );
}

export default App;
