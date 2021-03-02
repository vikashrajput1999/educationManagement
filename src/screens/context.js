import React from 'react';
const initialState = {
  "Class 1": [],
              "Class 2": [],
              "Class 3": [],
              "Class 4": [],
              "Class 5": [],
              "Class 6": [],
              "Class 7": [],
              "Class 8": [],
              "Class 9": [],
              "Class 10": [],
              "Class 11": [],
              "Class 12": []
};
export const TakeHolidayContext = React.createContext(null);
export default function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <TakeHolidayContext.Provider value={{state, setState}}>
      {props.children}
    </TakeHolidayContext.Provider>
  );
}
