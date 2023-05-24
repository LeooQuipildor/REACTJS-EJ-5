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
      <section className='cardLista'>
        <h1 className='display-4 text-center text-light pt-5'>BIENVENIDO</h1>
        <h2 className='text-center text-light'>Ingrese sus tareas</h2>
        <hr className='text-light border-2 opacity-50 mx-5'/>
        <Formulario></Formulario>
      </section>
    </Container>
    <footer className='bg-dark text-light text-center py-4'>
      <p>&copy;Todos los derechos reservados</p>
    </footer>
      
    </>
  )
}

export default App
