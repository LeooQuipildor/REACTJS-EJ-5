import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTarea from './ListaTarea';
import { useState } from 'react';

const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
          <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form.Group>
      </Form>
      <ListaTarea></ListaTarea>
    </section>
  );
};

export default Formulario;
