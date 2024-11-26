import React from 'react'
import Button from '../../core/components/atomos/Button/Button'
import Texto from '../../core/components/atomos/Textos/Texto'
import InputImg from '../../core/components/atomos/Input-img/Input-img'

const Categorias = () => {
  return (
    // <div>Categorias</div>
    <div>
      <Button texto = {'probando'} variante = {'white'} icon={'carrito'}/>
      <Button texto = {'probando'} variante = {'white'} />
      <Button texto = {'probando'} variante = {'orange'} />
      <Button texto = {'probando'} variante = {'green'} />
      <Texto level={'h1'} texto={'probando h1 naranja'} variante={'orange'}/>
      <Texto level={'h2'} texto={'probando h2 verde'} variante={'green'}/>
      <Texto level={'h3'} texto={'probando h3'}/>
      <Texto level={'p'} texto={'probando regular'}/>
      <InputImg />
    </div>
  )
}

export default Categorias