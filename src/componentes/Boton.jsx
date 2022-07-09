import React from 'react'

export const Boton = ({valorNuevo,setValor,calcular}) => {

  const esOperador = valorNuevo =>{
    return isNaN(valorNuevo) && (valorNuevo !=="." && (valorNuevo !== "="));
  }

  if(esOperador(valorNuevo)){
    return (
      <div>
          <div onClick={()=>setValor(valorNuevo)} className='boton boton-operador '>
              {valorNuevo}
          </div>
      </div>
    )
  }
  else{
    return (
      <div>
          <div onClick={()=>setValor(valorNuevo)} className='boton'>
              {valorNuevo}
          </div>
      </div>
    )
  }

 
}
