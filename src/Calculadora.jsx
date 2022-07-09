import { evaluate } from 'mathjs';
import React, { useEffect, useState } from 'react'
import { Botones } from './componentes/Botones'
import { Pantalla } from './componentes/Pantalla'

export const Calculadora = () => {

  const [valor, setValor] = useState("");


  const handleCambiarValor = (valorNuevo)=>{
    setValor(valor + valorNuevo );
  }
  const calcular = ()=>{
    try {
      setValor(evaluate(valor));
    } catch (error) {
      setValor("ERROR");
    }
  }
  const borrar = ()=>{
    setValor("");
  }

  return (
    <div className='AppCalculadora'>
        <h1 className='animate__animated animate__fadeInDownBig nombre'>Calculadora App Pablizs</h1>
        <div className=' animate__animated animate__flipInX calculadora'>
            <Pantalla valor={valor}/>
            <Botones setValor={handleCambiarValor} calcular={calcular} borrar={borrar}/>
        </div>
        
    </div>
  )
}
