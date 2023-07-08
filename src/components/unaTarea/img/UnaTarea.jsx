import React, { useState } from 'react'

import guardar from './img/guardar.png';
import salir from './img/salir.png';
import checked from './img/checked.svg';
import unchecked from './img/unchecked.svg';
import festejo from './img/festejo.svg';
import editar from './img/editar.svg';
import eliminar from './img/eliminar.svg';
import { useAppContext } from '../../AppProvider';

const UnaTarea = (index) => {

  const [tareas, dispatch] = useAppContext();

  const [clickedCancelar, setClickedCancelar] = useState(false);
  const [clikedEditar, setClickedEditar] = useState(true);
  const [clickedChecked, setClickedChecked] = useState(false);
  
  const [nombreTarea, setNombreTarea] = useState();

  const handleEditarTarea = () => {
    setClickedEditar(false)
    setClickedCancelar(true)
  }

  const handleGuardarTarea = () => {
    if((tareas[index].nombreTarea !== '' && tareas[index].nombreTarea !== null && tareas[index].nombreTarea !== undefined)){
      const unaTarea = {nombre: tareas[index].nombreTarea, estadoTarea: nombreTarea, id: tareas[index].idTarea}
      dispatch({
        type: 'UPDATE_TASK',
        value: unaTarea
      })
    }
    setNombreTarea('')
    setClickedEditar(false)
  }
  const handleEliminarTarea = ()=>{
    dispatch({
      type: 'DELETE_TASK',
      value: {nombre: tareas[index].nombreTarea, estadoTarea: tareas[index].estadoTarea, id: tareas[index].idTarea}
    })
  }

  const handleCancelar = () => {
    setClickedEditar(false)
    setClickedCancelar(true)
  }

  

  const handlerClickedChecked = (id) =>{
    setClickedChecked(clickedChecked)
    
    if (clickedChecked)
      dispatch({
        type: 'UPDATE_TASK',
        value: {nombre: tareas[index].nombreTarea, estadoTarea: tareas[index].estadoTarea, id}
      })
    // DEBERIA CHECKEAR TODA LA LISTA PARA VER SI TODAS LOS ESTADOS DE LAS TAREAS ESTAN EN TRUE 
  }

  return (
      <div>
        <img src={tareas[index].estadoTarea ? checked : unchecked} alt="check-box" onClick={handlerClickedChecked(tareas[index].idTarea)}></img> 
        <p>{tareas[index].nombre}</p>
        <div className="botones">
          <img src={guardar && (tareas[index].estadoTarea ? festejo : editar)} alt="editar"  onClick={clikedEditar ? handleGuardarTarea : handleEditarTarea  }/>
          <img src={ salir && (tareas[index].estadoTarea ? festejo : eliminar)} alt="eliminar" onClick={clickedCancelar ? handleCancelar : handleEliminarTarea}></img>
        </div>
      </div>
  )
}

export default UnaTarea