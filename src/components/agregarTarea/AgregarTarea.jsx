import React, {useState} from 'react';
import './agregarTarea.css';
import { useAppContext } from '../../AppProvider';

const AgregarTarea = () => {
  const [nombreTarea, setNombreTarea] = useState();
  const [idTarea, setIdTarea] = useState(0);
 

  const {dispatch} = useAppContext();

 
  const [editarVisibilidad, setEditarVisibilidad] = useState(false)
  

  const handleButtonClickAgregar = () => {
      setEditarVisibilidad(true)
  }
  
  const handleButtonClickCancelar = () => {
    setEditarVisibilidad(false)
  }
  
  const handleButtonClickGuardar = () => {
    if((nombreTarea !== '' && nombreTarea !== null && nombreTarea !== undefined)){
      setIdTarea(idTarea + 1)
      const unaTarea = {nombreTarea, estadoTarea: false, idTarea}
      dispatch({
        type: 'ADD_TASK',
        value: unaTarea
      })
    } 
    setNombreTarea('')
    setEditarVisibilidad(false)
  }

  const vista = <div className='caja-input'>
      {
      editarVisibilidad 
      ? 
      <>
      <input type="text"  autoFocus="true"  onChange={(event)=>{setNombreTarea(event.target.value)}}/>
      <button className='boton-guardar' onClick={handleButtonClickGuardar}>Guardar</button>
      <button className='boton-cancelar' onClick={handleButtonClickCancelar}>Cancelar</button>
      </> 
     : 
     <button className='btn-agregar' onClick={handleButtonClickAgregar}>Nueva Tarea</button>
     }
  </div>

  

  return (
    <>
      {vista}
    </>
  )
}

export default AgregarTarea