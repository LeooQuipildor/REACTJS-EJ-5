import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container className='mainPage'>
      <h1 className='display-4 text-center text-light'>Titulo de prueba</h1>
      <hr className='text-light border-2 opacity-50'/>
      <Formulario></Formulario>
    </Container>
    <footer className='bg-dark text-light text-center py-4'>
      <p>&copy;Todos los derechos reservados</p>
    </footer>
      
    </>
  )
}

export default App
