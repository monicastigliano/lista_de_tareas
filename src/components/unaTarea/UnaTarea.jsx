import React, { useState } from 'react'

import guardar from './img/guardar.png';
import salir from './img/salir.png';
import checked from './img/checked.svg';
import unchecked from './img/unchecked.svg';
import festejo from './img/festejo.svg';
import editar from './img/editar.svg';
import eliminar from './img/eliminar.svg';



const UnaTarea = (tarea) => {

  const [habilitarEditar, setHabilitarEditar] = useState(false)
  // const {dispatch} = useAppContext();
  console.log(tarea);
  
  const handleEditarTarea = () => {
    console.log('Editar Tarea');
    setHabilitarEditar(true)
  }

  const handleEliminarTarea = ()=>{
    // dispatch({
    //   type: 'DELETE_TASK',
    //   value: {nombre: tarea.nombreTarea, estadoTarea: tarea.estadoTarea, id: tarea.idTarea}
    // })
    console.log('Eliminar Tarea');
  }

  const handlerClickedChecked = () =>{
    console.log('Tarea checkeada');
    
    // dispatch({
    //   type: 'UPDATE_TASK',
    //   value: {nombre: tarea.nombreTarea, estadoTarea: tarea.estadoTarea, id: tarea.idTarea}
    // })
    //DEBERIA CHECKEAR TODA LA LISTA PARA VER SI TODAS LOS ESTADOS DE LAS TAREAS ESTAN EN TRUE 
  }

  const [nombreTarea, setNombreTarea] = useState();
  

  const handleGuardarTarea = () => {
    // if((nombreTarea !== '' && nombreTarea !== null && nombreTarea !== undefined)){     
      
    //   dispatch({
    //     type: 'UPDATE_TASK',
    //     value: {
    //       nombre: nombreTarea,
    //       estadoTarea: false, 
    //       id: tarea.id
    //     }
    //   })
    // }
    setNombreTarea('')
    console.log(`Guardar Tarea ${nombreTarea}`);
  }

  const handleCancelar = () => {
    <UnaTarea></UnaTarea>
  }

  const vistaTarea =  
  <div>{  habilitarEditar ? <>
            <input type='text'  onChange={(event) =>{setNombreTarea(event.target.value)}}></input>
            <img src={ guardar} alt="guardar"  onClick={ handleGuardarTarea }/>
            <img src={salir} alt="salir" onClick={handleCancelar}/></>
           :
           <>
          <img src={tarea.estadoTarea ? checked : unchecked} alt="check-box" onClick={tarea.estadoTarea && handlerClickedChecked}></img> 
          <p>{tarea.nombre}</p>
          <div className="botones">
            <img src={guardar && (tarea.estadoTarea ? festejo : editar)} alt="editar"  onClick={!tarea.estadoTarea && handleEditarTarea  }/>
            <img src={ salir && (tarea.estadoTarea ? festejo : eliminar)} alt="eliminar" onClick={ !tarea.estadoTarea && handleEliminarTarea}></img>
          </div>
          </>}
  </div>

  return (
    <>
      {vistaTarea}
    </>
  )
}


export default UnaTarea