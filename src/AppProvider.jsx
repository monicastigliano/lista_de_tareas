import React, { createContext, useContext, useReducer } from 'react'


const AppContext = createContext();

const useAppContext = () => {return useContext(AppContext)};

const initialState = []

const reducer = (initialState, action) =>{
  switch (action.type) {
    case 'DELETE_ALL':
      initialState = action.value;
      return initialState
    case 'ADD_TASK':
      console.log(action.value)
      return [...initialState, action.value];
    case 'DELETE_TASK':
      return initialState.filter(tarea => tarea.idTarea !== action.value);
    case 'UPDATE_TASK':
      return initialState.map(tarea => {
        if(tarea.idTarea === action.value.id){
          return{
            ...tarea,
            nombreTarea: action.value.nombreTarea
          }
        }
        return tarea;
      })    
    case 'DONE_TASK':
      return initialState.map((tarea) => {
        if(tarea.idTarea === action.value){
          return{
            ...tarea,
            estadoTarea: !tarea.estadoTarea
          }
        }
        return tarea;
      })    
          
    default: return initialState;
  }
}






const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{tareas: state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppProvider, useAppContext}