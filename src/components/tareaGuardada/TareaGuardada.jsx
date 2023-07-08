import React, {useState} from 'react';


import './tareasGuardada.css';
import { useAppContext } from '../../AppProvider';
import ListaDeTareasCompletas from '../listaDeTareasCompleta/ListaDeTareasCompletas';

import guardar from './img/guardar.png';
import salir from './img/salir.png';
import checked from './img/checked.svg';
import unchecked from './img/unchecked.svg';
import festejo from './img/festejo.svg';
import editar from './img/editar.svg';
import eliminar from './img/eliminar.svg';


function TareaGuardada() {
  const [habilitarEditar, setHabilitarEditar] = useState(false);
  const [check, setCheck] = useState(false);
  const [nombreTarea, setNombreTarea] = useState();
  const [idEditar, setIdEditar] = useState();  
  const {tareas, dispatch} = useAppContext();
  console.log(tareas)
  

  const handleEditarTarea = (idTarea) => {
    console.log('Editar tarea');
    setIdEditar(idTarea)
    setHabilitarEditar(true);
  }

  const handleTareaEditada = (id, nombreTarea) => {
    if((nombreTarea !== '' && nombreTarea !== null && nombreTarea !== undefined)){ 
      dispatch({
        type: 'UPDATE_TASK',
        value: {
          id,
          nombreTarea}
      })
    } 
    setNombreTarea('')
    setHabilitarEditar(false);
  }
  const handleEliminarTarea = idTarea=>{
    dispatch({
      type: 'DELETE_TASK',
      value: idTarea
    })
    console.log('Eliminar Tarea');
  }


  const handlerClickedChecked = idTarea => {
    console.log('Tarea checkeada');
    if(!check){
      dispatch({
        type: 'DONE_TASK',
        value: idTarea
      })
    } else
    setCheck(false)
  }

  const handleCancelar = () => setHabilitarEditar(false)
  
   return (
      <div className="contenedor">
        <ul className='tareas-guardada'>
          {tareas && tareas.map((tarea, index)=>(
            <li className='lista'  key= {index}>
                {  habilitarEditar && ( idEditar === tarea.idTarea)  ?
                <> 
                <input type='text' onChange={(event) =>{setNombreTarea(event.target.value)}} autoFocus="true"></input>
                <img src={ guardar} alt="guardar"  onClick={()=> {handleTareaEditada(tarea.idTarea, nombreTarea)} }/>
                <img src={salir} alt="salir" onClick={handleCancelar}/></>
              :
              <>
              <img src={tarea.estadoTarea ? checked : unchecked} 
                   alt="check-box" 
                   onClick={()=> (!check && handlerClickedChecked(tarea.idTarea))}></img> 
              <input className='input-tarea-guardada' value={tarea.nombreTarea} disabled></input>
              <div className="botones">
                <img src={tarea.estadoTarea ? festejo : editar} alt="editar"  onClick={ ()=>{ !tarea.estadoTarea && handleEditarTarea(tarea.idTarea)}} />
                <img src={tarea.estadoTarea ? festejo : eliminar} alt="eliminar" onClick={() => { !tarea.estadoTarea && handleEliminarTarea(tarea.idTarea)}}></img>
              </div>
              </>}           
            </li>         
          ))}
        </ul>
        
        {(tareas.length > 0 && tareas.every((tarea)=> tarea.estadoTarea === true)) && <ListaDeTareasCompletas></ListaDeTareasCompletas>}
      </div> 
    )
  
             
}
export default TareaGuardada;