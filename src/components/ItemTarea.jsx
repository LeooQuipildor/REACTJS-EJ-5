import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

const ItemTarea = ({tarea, borrarTarea}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {tarea}
            <Button variant='danger' onClick={()=> borrarTarea(tarea)}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;