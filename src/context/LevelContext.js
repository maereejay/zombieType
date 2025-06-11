import React, { createContext, useState, useContext } from "react";

// Create the context
const LevelContext = createContext();

// Create a provider component
export function LevelProvider({ children }) {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <LevelContext.Provider value={{ selectedLevel, setSelectedLevel }}>
      {children}
    </LevelContext.Provider>
  );
}

// Create a custom hook to consume the context easily
export function useLevel() {
  return useContext(LevelContext);
}
