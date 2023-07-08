import React, { useState } from 'react';
import festejo from './img/festejo.svg';
import './listaDeTareasCompletas.css';
import { useAppContext } from '../../AppProvider';

function ListaDeTareasCompletas() {
  const {dispatch} = useAppContext();
  const [visibilidad, setVisibilidad] = useState(true)
  
  const handleNuevaLista = () =>{ 
    dispatch({type: 'DELETE_ALL', value: []})
    setVisibilidad(false)
  }

  return(
        <> { visibilidad ?
            <div className='tareaCompleta'>
              <div className="felicitacion">
                  <p>TODAS LAS TAREAS ESTAN COMPLETAS!</p>
                  <img src={festejo} alt="" srcset="" />
              </div>
              <div className="caja-botones">
                <button className='botonVaciarLista' onClick={handleNuevaLista}>Vaciar Lista</button>
              </div>
            </div> 
            : 
            <></>
            }
            </>
            
        )
}

export default ListaDeTareasCompletas