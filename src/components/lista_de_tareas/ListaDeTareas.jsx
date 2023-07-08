import React from 'react';

import './listaDeTareas.css';
import {useAppContext} from '../../AppProvider';
import Cabecera from '../cabecera/Cabecera';
import AgregarTarea from '../agregarTarea/AgregarTarea';
import TareaGuardada from '../tareaGuardada/TareaGuardada';



function ListaDeTareas() {
  const {tareas} = useAppContext();
  
  let Lista = ''
  if(tareas){ 
    Lista =  <TareaGuardada></TareaGuardada>
  }
  
  
  return (
    <div className='lista-de-tareas'>
      <Cabecera></Cabecera>
      <AgregarTarea></AgregarTarea>
      {Lista}
      {/* {felicitaciones} */}
      {/* <footer className="footer">© monisol_dev 2023</footer> */}
  </div>
  )
}

export default ListaDeTareas;