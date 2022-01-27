// darkmodeContextProvider.tsx
import React, { createContext, useContext, useState } from 'react';

// interface for context data
interface IDarkmodeContext {
  useDarkmode: boolean;
  setUseDarkmode: React.Dispatch<React.SetStateAction<boolean>>
}


const DarkmodeContext = createContext<IDarkmodeContext|undefined>(undefined);

// useDarkmodeContext is used for access the state & setter function
export const useDarkmodeContext = () => {
  const context = useContext(DarkmodeContext);

  // throw error if useDarkmodeContext is called outside of provider
  if (context === undefined) {
    throw new Error('Call "useDarkmodeContext" only inside a DarkmodeContextProvider');
  }

  return context;
}

// component to provide context for its child components.
// 'children' prop allow to give childen components for this component
const DarkmodeContextProvider: React.FC = ({children}) => {

  // basic useState hook for hold the curent state and setter
  const [useDarkmode, setUseDarkmode] = useState<boolean>(false);
  
  // return context provider with current state & setter with all given children components
  return (
    <DarkmodeContext.Provider value={{useDarkmode: useDarkmode, setUseDarkmode: setUseDarkmode}}>
      {children}
    </DarkmodeContext.Provider>
  )
}

export default DarkmodeContextProvider;