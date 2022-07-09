import React from 'react'
import { Boton } from './Boton'

export const Botones = ({setValor,calcular,borrar}) => {
  return (
    <div className='botones'>
        <div className='fila'>
            <Boton setValor={setValor} valorNuevo={"7"}>7</Boton>
            <Boton setValor={setValor} valorNuevo={"8"}>8</Boton>
            <Boton setValor={setValor} valorNuevo={"9"}>9</Boton>
            <Boton setValor={setValor} valorNuevo={"/"}>/</Boton>
        </div>
        <div className='fila'>
            <Boton setValor={setValor} valorNuevo={"4"}>4</Boton>
            <Boton setValor={setValor} valorNuevo={"5"}>5</Boton>
            <Boton setValor={setValor} valorNuevo={"6"}>6</Boton>
            <Boton setValor={setValor} valorNuevo={"*"}>*</Boton>
        </div>
        <div className='fila'>
            <Boton setValor={setValor} valorNuevo={"1"}>1</Boton>
            <Boton setValor={setValor} valorNuevo={"2"}>2</Boton>
            <Boton setValor={setValor} valorNuevo={"3"}>3</Boton>
            <Boton setValor={setValor} valorNuevo={"-"}>-</Boton>
        </div>
        <div className='fila'>
            <Boton setValor={setValor} valorNuevo={"0"}>0</Boton>
            <Boton setValor={setValor} valorNuevo={"."}>.</Boton>
            <button onClick={calcular} className='boton boton-operador'>=</button>
            <Boton setValor={setValor} valorNuevo={"+"}>+</Boton>
        </div>
        <div className='fila mt-2'>
            <button onClick={borrar} className='btn boton-clear form-control'>BORRAR TODO</button>
        </div>
    </div>
  )
}
