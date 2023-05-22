import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTarea from './ListaTarea';
import { useState } from 'react';

const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);


  //Aqui creo mis funciones
  const handleSubmit = (e)=>{
    e.preventDefault();
    setListadoTareas([...listadoTareas, tarea])
    setTarea("");
  }

  const borrarTarea = (nombreTarea)=>{
    let arregloFiltrado=listadoTareas.filter((itemTarea)=>itemTarea !== nombreTarea);
    setListadoTareas(arregloFiltrado)
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
          <Button variant="primary" type="submit">
          Enviar
        </Button>
        </Form.Group>
      </Form>
      <ListaTarea listadoTareas={listadoTareas} borrarTarea={borrarTarea}></ListaTarea>
    </section>
  );
};

export default Formulario;
