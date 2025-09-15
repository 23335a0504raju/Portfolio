// Create a new file: context/RobotContext.js
import { createContext, useContext, useState } from 'react';

const RobotContext = createContext();

export const useRobot = () => {
  return useContext(RobotContext);
};

export const RobotProvider = ({ children }) => {
  const [robotActive, setRobotActive] = useState(false);

  const toggleRobot = () => {
    setRobotActive(prev => !prev);
  };

  return (
    <RobotContext.Provider value={{ robotActive, toggleRobot }}>
      {children}
    </RobotContext.Provider>
  );
};